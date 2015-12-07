var score = 0; //Set score to 0
var total = 5; //Total questions
var point = 1; //Points per answer
var highest = total * point;

//Initializer
function init() {
  sessionStorage.setItem('a1', 'b');
  sessionStorage.setItem('a2', 'c');
  sessionStorage.setItem('a3', 'a');
  sessionStorage.setItem('a4', 'd');
  sessionStorage.setItem('a5', 'a');
}

$(document).ready(function(){
  //Hide all questions
  $('.questionForm').hide();

  //Show first question
  $('#q1').show();

  $('.questionForm #submit').click(function(){
    //Get data attribute
    var current = $(this).parents('form:first').data('question');
    var next = $(this).parents('form:first').data('question') + 1;
    //Hide all questions
    $('.questionForm').hide();
    //Show next question
    $('#q' + next + '').fadeIn(300);
    process('' + current + '');
    return false;
  });
});

//Process the answers
function process(n) {
  //Get input value
  var submitted = $('input[name=q' + n + ']:checked').val();
  if(submitted == sessionStorage.getItem('a' + n + '')) {
    score += point;
  }

  if(n == total) {
    $('#results').html('<h3>Your final score is: ' + score + ' out of ' + highest + '</h3>');
    if(score == highest) {
      $('#results').append('<p>You are a photography master!</p>');
    } else if(score == highest - point || score == highest - point*2) {
      $('#results').append('<p>Good job</p>');
    }
    $('#results').append('<a href="index.html">Take quiz again</a>');
  }
  return false;
}

//Add event listener
window.addEventListener('load', init, false);
