'use strict';

function showSlide(n) {
  let i, slide, dot;

  slide = document.getElementsByClassName('hide');
  // dots = document.getElementsByClassName("dot");

  ind = n >= slide.length ? 0 : (ind = n < 0 ? slide.length - 1 : ind);

  for (i = 0; i < slide.length; ++i) {
      slide[i].style.display = "none";
  }
  slide[ind].style.display = "block";

  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  // dots[ind-1].className += " active";
}

let ind = 0;
showSlide(ind);

function listSlides(n) {
  showSlide(ind += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlide(ind = n);
// }