let sliderImages = document.querySelectorAll('.slider img');
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove('active');
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].classList.add('active');
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].classList.add('active');
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].classList.add('active');
  current++;
}

// Left arrow click
document.querySelector('.prev').addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
document.querySelector('.next').addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

