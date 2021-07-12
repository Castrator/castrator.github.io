let reference = '';
// Open the Modal
function openModal(e) {
  reference = document.querySelector(e);
  reference.style.display = 'block';
}

// Close the Modal
function closeModal(e) {
  reference.style.display = 'none';
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n, f, l) {
  showSlides((slideIndex += n), f, l);
}

// Thumbnail image controls
function currentSlide(n, f, l) {
  showSlides((slideIndex = n), f, l);
}

function showSlides(n, firstIndex, lastIndex) {
  var i;
  var slides = document.getElementsByClassName('modal-slides');
  var dots = document.getElementsByClassName('demo');
  // var captionText = document.getElementById("caption");

  if (n > lastIndex) {
    slideIndex = firstIndex;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  console.log(dots[slideIndex - 1]);
  // captionText.innerHTML = dots[slideIndex-1].alt;
}
