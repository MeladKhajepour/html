var stack = document.getElementById('stack');
var block = stack.lastElementChild;

function shift() {
  block.nextElementSibling.style.backgroundColor = '#333';
}

function shift2() {
  stack.style.backgroundColor = '#5C6BC0';
}

function push() {
  block.style.visibility = 'visible';
  if(block == stack.firstElementChild) {
    block.nextElementSibling.style.backgroundColor = 'red';
    setTimeout(shift, 150);
  } else {
    block = block.previousElementSibling;
  }
}

function pop() {
  if(block.nextElementSibling) {
    block = block.nextElementSibling;
  } else {
    if(block.style.visibility = 'hidden') {
      stack.style.backgroundColor = 'red';
      setTimeout(shift2, 150);
    }
  }
  block.style.visibility = 'hidden';
}

function reset() {
  $('.stack').css('visibility', 'hidden');
  block = stack.lastElementChild;
}
