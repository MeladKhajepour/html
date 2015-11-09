$(document).ready(function() {
    //Define Vars
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var cw = 15;
    var d = 'right';
    var food;
    var score;
    var params = {
      colour: localStorage.colour,
      speed: localStorage.speed
    };

    //Snake Array
    var snake_array;

    //Initialize
    $(function() {

      init = function() {
      d = 'right';
      create_snake();
      create_food();
      score = 0;

      if(typeof game_loop != "undefined") clearInterval(game_loop);
      game_loop = setInterval(paint, params.speed);

      for(var i = 0; i < document.getElementById('speed').inlineRadioOptions.length; i++) {
        if(localStorage.speed == document.getElementById('speed').inlineRadioOptions[i].value) {
          document.getElementById('speed').inlineRadioOptions[i].checked = true;
        }
      }

      for(var i = 0; i < document.getElementById('colour').inlineRadioOptions.length; i++) {
        if(localStorage.colour == document.getElementById('colour').inlineRadioOptions[i].value) {
          document.getElementById('colour').inlineRadioOptions[i].checked = true;
        }
      }
    }
  });

    //Create Snake
    function create_snake() {
      var length = 5;
      snake_array = [];
      for(var i = length-1; i >= 0; i--) {
        snake_array.push({
          x: i,
          y:0
        });
      }
    }

    //Create Food
    function create_food() {
      food = {
        x: Math.round(Math.random()*(w-cw)/cw),
        y: Math.round(Math.random()*(h-cw)/cw)
      };
    }

    //Paint Snake
    function paint() {
      //Paint canvas
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,w,h);
      ctx.strokeStyle = "white";
      ctx.strokeRect(0,0,w,h);

      var nx = snake_array[0].x;
      var ny = snake_array[0].y;

      if(d == 'right') nx++;
      else if(d == 'left') nx--;
      else if(d =='up') ny--;
      else if(d == 'down') ny++;

      //Collide code
      if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array)) {
        //init();
        //Insert final score
        $('#final_score').html(score);
        //Show overlay
        $('#overlay').fadeIn(300);
        return;
      }

      if(nx == food.x && ny == food.y){
        var tail = {x: nx, y: ny};
        score++;
        //Create Food
        create_food();
      } else {
        var tail = snake_array.pop();
        tail.x = nx; tail.y = ny;
      }

      snake_array.unshift(tail);

      for(var i = 0; i < snake_array.length; i++) {
        var c = snake_array[i];
        paint_cell(c.x, c.y);
      }

      //Paint Cell
      paint_cell(food.x, food.y);

      //Check Score
      checkscore(score);

      //Display current score
      $('#score').html('Your Score: '+score)
    }

    function paint_cell(x, y) {
      ctx.fillStyle = params.colour;
      ctx.fillRect(x*cw, y*cw, cw, cw);
      ctx.strokeStyle='white';
      ctx.strokeRect(x*cw, y*cw, cw, cw);
    }

    function check_collision(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x == x && array[i].y == y)
        return true;
      }
      return false;
    }

    function checkscore(score) {
      if(localStorage.getItem('highscore') === null) {
        //If there is no high score
        localStorage.setItem('highscore', score);
      } else {
        //If there is a high score
        if(score > localStorage.getItem('highscore')) {
          localStorage.setItem('highscore', score);
        }
      }

      $('#high_score').html('High Score: '+localStorage.highscore);
    }

    //Keyboard Controller
    $(document).keydown(function(e) {
      var key = e.which;
      if(key == '37' && d !='right') d = 'left';
      else if(key == '38' && d != 'down') d = 'up';
      else if(key == '39' && d != 'left') d = 'right';
      else if(key == '40' && d != 'up') d = 'down';
    });
});

function resetScore() {
  localStorage.highscore = 0;
  //Display High Score
  highscorediv = document.getElementById('high_score');
  highscorediv.innerHTML = 'High Score: 0';
}

//Set score
function setScore() {
  if(localStorage.getItem('highscore') === null) {
    //If there is no high score
    localStorage.setItem('highscore', score);
  } else {
    //If there is a high score
    if(score > localStorage.getItem('highscore')) {
      localStorage.setItem('highscore', score);
    }
  }
}

function setParams() {
  localStorage.speed = setSpeed();
  localStorage.colour = setColour();
}

function setSpeed() {
  if(localStorage.getItem('speed') === null) {
    localStorage.setItem('speed', 150);
  } else {
    for(var i = 0; i < document.getElementById('speed').inlineRadioOptions.length; i++) {
      if(document.getElementById('speed').inlineRadioOptions[i].checked) {
        localStorage.speed = document.getElementById('speed').inlineRadioOptions[i].value;
      }
    }
  }
  return localStorage.speed;
}

function setColour() {
  if(localStorage.getItem('colour') === null) {
    localStorage.setItem('colour', 'purple');
  } else {
    for(var i = 0; i < document.getElementById('colour').inlineRadioOptions.length; i++) {
      if(document.getElementById('colour').inlineRadioOptions[i].checked) {
        localStorage.colour = document.getElementById('colour').inlineRadioOptions[i].value;
      }
    }
  }
  return localStorage.colour;
}

function start() {
  $('#start_screen').fadeOut(300);
  $(function() {
    init();
  });
}
