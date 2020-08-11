'use strict';

function showSlide(n) {
  let i, slides, dots;

  slides = document.getElementsByClassName('hide');
  dots = document.getElementsByClassName('dot');

  ind = n >= slides.length ? 0 : (ind = n < 0 ? slides.length - 1 : ind);

  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[ind].style.display = 'block';
  dots[ind].className += ' active';
}

function autoShow() {
  let i, slides;

  slides = document.getElementsByClassName('hide');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (ind >= slides.length) {ind = 0}
  slides[ind].style.display = "block";
  ind++;
  setTimeout(autoShow, 3000);
}

let listSlides = (n) => {showSlide(ind += n);}
let currentSlide = (n) => {showSlide(ind = n);}

let ind = 0;

autoShow();
