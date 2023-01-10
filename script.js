const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slider = document.querySelector('.image-slider');
const navDotContainer = document.querySelector('.nav-dot-container');
const pics = document.querySelectorAll('img');
let counter = 0; // To keep track of a picture's place
const pic = pics[0];
apendNavigationDots() // Append navigation dots using number of pics
let activeDot;
setActiveDot();

nextBtn.addEventListener('click', () => {
  removeActiveDot();
  if (counter === pics.length-1) {
    counter = -1;
  };
  counter++;
  // -pic.clientWidth * counter pushes the slider 1 picture length left 
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
  setActiveDot();
});

prevBtn.addEventListener('click', () => {
  removeActiveDot();
  if (counter <= 0) {
    counter = pics.length;
  }
  counter--;
  slider.style.transform = `translateX(${-pic.clientWidth * counter}px)`;
  setActiveDot();
});

function apendNavigationDots() {
  for (let i = 0; i < pics.length; i++) {
    let navDot = document.createElement('div');
    navDot.className = 'nav-dot';
    navDot.dataset.index = i;
    navDot.addEventListener('click', jumpToPicture);
    navDotContainer.appendChild(navDot);
  }
}

function setActiveDot() {
  activeDot = document.querySelector(`[data-index="${counter}"]`);
  activeDot.classList.add('active');
}

function removeActiveDot() {
  activeDot = document.querySelector(`[data-index="${counter}"]`);
  activeDot.classList.remove('active');
}

function jumpToPicture(e) {
  removeActiveDot();
  const newCounter = e.target.dataset.index;
  slider.style.transform = `translateX(${-pic.clientWidth * newCounter}px)`;
  counter = Number(newCounter);
  setActiveDot();
}