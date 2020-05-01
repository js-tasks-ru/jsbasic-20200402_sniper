function initCarousel() {
  const s = document.querySelector('[data-carousel-holder]');
  const sArrowRight = s.querySelector('.carousel__arrow_right');
  const sArrowLeft = s.querySelector('.carousel__arrow_left');
  const sItems = s.querySelectorAll('.carousel__slide');
  const sWrap = s.querySelector('.carousel__inner');

  let defaultIndex = 0; let touchParams = [];

  sMain();

  document.addEventListener('click', (event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      nextSlide();
    } else if (event.target.closest('.carousel__arrow_left')) {
      prevSlide();
    }
  });

  document.addEventListener('touchmove', (event) => {
    if (event.target.closest(sWrap)) {
      touchParams.push(event.touches[0].clientX);
    }
  });

  document.addEventListener('touchend', () => {
    if (touchParams[0] > touchParams[touchParams.length - 1] && defaultIndex !== sItems.length - 1) {
      nextSlide();
    } else if (touchParams[0] < touchParams[touchParams.length - 1] && defaultIndex !== 0) {
      prevSlide();
    }
    touchParams = [];
  });

  function nextSlide() {
    defaultIndex++;
    sMain();
  }

  function prevSlide() {
    defaultIndex--;
    sMain();
  }

  function sMain() {
    let slidesWidth = defaultIndex * -sWrap.offsetWidth;
    sWrap.style.transform = `translateX(${slidesWidth}px)`;
    showHideArrow();
  }

  function showHideArrow() {
    if (defaultIndex > 0 && defaultIndex < sItems.length - 1) {
      sArrowLeft.style.display = '';
      sArrowRight.style.display = '';
    } else if (defaultIndex === 0) {
      sArrowLeft.style.display = 'none';
    } else if (defaultIndex === sItems.length - 1) {
      sArrowRight.style.display = 'none';
    }
  }
}
