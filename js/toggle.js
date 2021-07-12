const image = document.querySelector('.image');
const toggleMe = document.querySelector('.toggle-me');
const theHeader = document.querySelector('.the-head');

function imgClick() {
  // console.log(toggleMe.style.width);
  if (toggleMe.style.width === '0px') {
    toggleMe.style.width = '100%';
    toggleMe.style.opacity = '1';
  } else {
    toggleMe.style.opacity = '0.50';
    toggleMe.style.width = '0px';
  }
  moveImg();
}

function moveImg() {
  if (image.classList[1] === 'header-image-inside') {
    toggleMe.insertAdjacentElement('afterbegin', image);
    image.removeAttribute('class');
    image.classList.add('image');
    image.classList.add('header-image');
  } else {
    theHeader.insertAdjacentElement('afterbegin', image);
    image.removeAttribute('class');
    image.classList.add('image');
    image.classList.add('header-image-inside');
  }
}

image.addEventListener('click', imgClick);
