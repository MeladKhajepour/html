var headers = document.getElementsByClassName('header');
var containers = document.getElementsByClassName('box');
var titles = document.getElementsByClassName('title');

//Img containers
var first = $('.first');
var second = $('.second');
var third = $('.third');
var height = window.innerHeight;

$(document).ready(function() {
  var counter = 0;
  var num = setTimeout(count, 50);
  function count() {
      if (counter < 100){
          counter++;
          $('#index').css('opacity', counter/100);
          setTimeout(count, 10);
      }
  }


  //Temporary image fillers
  var i = 0;
  var images = [];
  for(i; i < containers.length; i++) {
    if(window.innerWidth >= 992) {
      containers[i].innerHTML = '<div class="holder">' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '</div>';
    } else {
      containers[i].innerHTML = '<div class="holder">' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '<div class="col-xs-4 col-md-3 pic"><img/></div>' +
                                '</div>';
    }
    images[i] = containers[i].getElementsByTagName('img');
    var j = 0;
    for(j; j < images[i].length; j++) {
      images[i][j].setAttribute('src', 'pics/Overam' + (j + 1) + '.jpg');
    }
  }
  images = null;

  i = 0;

  //Resize handler wip
  /*if(window.innerWidth < 992) {
    for(i; i < containers.length; i++) {
      var img = containers[i].getElementsByTagName('img');
      img[3].css('display', 'none');
    }
  } else {
    for(i; i < containers.length; i++) {
      var img = containers[i].getElementsByTagName('img');
      img[3].css('display', 'block');
    }
  }*/

  //Fade headers
  $('.parallax').scroll(function() {
    if(first.offset().top < height/2){
      $('.header:first').css('opacity', (first.offset().top/height)*2)
    } else {
      $('.header:first').css('opacity', 1);
    }
    if(second.offset().top < height/2){
      $('.header:nth-of-type(2)').css('opacity', (second.offset().top/height)*2)
    } else {
      $('.header:nth-of-type(2)').css('opacity', 1);
    }
    if(third.offset().top < height/2){
      $('.header:nth-of-type(3)').css('opacity', (third.offset().top/height)*2)
    } else {
      $('.header:nth-of-type(3)').css('opacity', 1);
    }

    //Fade boxes
    if(first.offset().top < height * -0.6) {
      $('.first').css('opacity', ((first.offset().top + height)/height)*(1/0.4));
    } else {
      $('.first').css('opacity', 1);
    }
    if(first.offset().top < height * -0.5) {
      $('.second').css('opacity', ((second.offset().top + height)/height)*(1/0.4));
    } else {
      $('.second').css('opacity', 1);
    }
    if(first.offset().top < height * -0.5) {
      $('.third').css('opacity', ((third.offset().top + height)/height)*(1/0.4));
    } else {
      $('.second').css('opacity', 1);
    }
  })

})
