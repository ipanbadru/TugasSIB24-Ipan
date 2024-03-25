const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
let slideActive = 0;
const maxSlide = slides.length - 1;

slides[0].classList.add('active');

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

btnNext.addEventListener('click', () => {
  slideActive = slideActive === maxSlide ? 0 : slideActive + 1;

  btnNext.disabled = true;
  btnPrev.disabled = true;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideActive) * 100}%)`;
    slide.classList.remove('active');
  });

  slides[slideActive].classList.add('active');

  setTimeout(() => {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }, 1000);
});

btnPrev.addEventListener('click', () => {
  slideActive = slideActive === 0 ? maxSlide : slideActive - 1;

  btnNext.disabled = true;
  btnPrev.disabled = true;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideActive) * 100}%)`;
  });

  setTimeout(() => {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }, 1000);
});
