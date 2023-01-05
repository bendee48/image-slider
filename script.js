const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slider = document.querySelector('.image-slider');
const navDotContainer = document.querySelector('.nav-dot-container');
const pics = document.querySelectorAll('img');
let counter = 0; // To keep track of a picture's place
const pic = pics[0];
navigationDots() // Append navigation dots
let activeDot;
setActiveDot();

nextBtn.addEventListener('click', () => {
  if (counter === pics.length-1) {
    counter = -1;
  };
  counter++;
  // -pic.clientWidth * counter pushes the slider 1 picture length left 
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
  let nextDot = document.querySelector(`[data-index="${counter}"]`);
  nextDot.classList.add('active');
  activeDot.classList.remove('active');
  activeDot = nextDot;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = pics.length;
  }
  counter--;
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
  let nextDot = document.querySelector(`[data-index="${counter}"]`);
  nextDot.classList.add('active');
  activeDot.classList.remove('active');
  activeDot = nextDot;
});

function navigationDots() {
  for (let i = 0; i < pics.length; i++) {
    let navDot = document.createElement('div');
    navDot.className = 'nav-dot';
    navDot.dataset.index = i;
    navDotContainer.appendChild(navDot);
  }
}

function setActiveDot() {
  activeDot = document.querySelector(`[data-index="${counter}"]`);
  activeDot.classList.add('active');
}