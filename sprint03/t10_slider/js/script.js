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

let listSlides = (n) => {showSlide(ind += n);}
let currentSlide = (n) => {showSlide(ind = n);}

let ind = 0;

showSlide(ind);
