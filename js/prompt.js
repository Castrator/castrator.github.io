const image = document.querySelector('.image');
const promptMe = document.querySelector('.prompt-me');
const theHeader = document.querySelector('.the-head');

function imgClick() {
  console.log(promptMe.style.width);
  if (promptMe.style.width === '0px') {
    promptMe.style.width = '100%';
    promptMe.style.opacity = '1';
  } else {
    promptMe.style.opacity = '0.50';
    promptMe.style.width = '0px';
  }
  moveImg();
}

function moveImg() {
  if (image.classList[1] === 'header-image-inside') {
    promptMe.insertAdjacentElement('afterbegin', image);
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
