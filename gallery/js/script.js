var headers = document.getElementsByClassName('header');
var containers = document.getElementsByClassName('container');
var titles = document.getElementsByClassName('title');

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



  $(window).scroll(function(i){
    containers[0].style.top = '350px';
    containers[1].style.top = '1200px';
    containers[2].style.top = '2050px';
    var first = containers[0].getBoundingClientRect();
    var second = containers[1].getBoundingClientRect();
    var third = containers[2].getBoundingClientRect();

    //First display
      if((first.top)/350 > 0.85 && first.top > 0) {
        headers[0].style.opacity = 0.85;
      } else if(first.top > 0){
        headers[0].style.opacity = (first.top)/350;
      } else {
        headers[0].style.opacity = 0;
      }
      headers[0].style.top =  0.5*(350 - first.top) + 'px';
      titles[0].style.top = (175 - (350 - first.top)*0.25) + 'px';

    //Second display
    if(first.bottom < $(window).height() + 10 && first.bottom >= $(window).height() - 350) {
      headers[1].style.opacity = (($(window).height() - first.bottom)/350)*0.85;
    } else if(first.bottom < $(window).height() - 350 && first.bottom > 0) {
      headers[1].style.opacity = 0.85;
    } else if(first.bottom <= 0 && headers[1].style.opacity >= 0) {
      headers[1].style.opacity = ((350 + first.bottom)/350)*0.85;
    } else {
      headers[1].style.opacity = 0;
    }
    //containers[1].style.top = '-250px';
    containers[1].style.marginBottom = '-250px';
    headers[1].style.top =  0.5*(250 - second.top) + 'px';
    titles[1].style.top = (275 - (350 - second.top)*0.25) + 'px';

    //Third display
    if(second.bottom < $(window).height() + 10 && second.bottom >= $(window).height() - 350) {
      headers[2].style.opacity = (($(window).height() - second.bottom)/350)*0.85;
    } else if(second.bottom < $(window).height() - 350 && second.bottom > 0) {
      headers[2].style.opacity = 0.85;
    } else if(second.bottom <= 0){
      //Dont fade on last display
      //headers[2].style.opacity = ((350 + second.bottom)/350)*0.85;
    } else {
      headers[2].style.opacity = 0;
    }
    //containers[2].style.top = '-250px';
    headers[2].style.top =  0.5*(375 - third.top) + 'px';
    titles[2].style.top = (200 - (350 - third.top)*0.25) + 'px';
  })
})
