const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const pics = document.querySelectorAll('img');
let counter = 0; // To keep track of a picture's place
const slider = document.querySelector('.image-slider');
const pic = pics[0];

nextBtn.addEventListener('click', () => {
  if (counter === pics.length-1) {
    counter = -1;
  };
  counter++;
  // -pic.clientWidth * counter pushes the slider 1 picture length left 
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = pics.length;
  }
  counter--;
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
});