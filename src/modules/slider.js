const slider = (sliderClass, slidesClass, dotsClass, buttonClass) => {

  const sliderBlock = document.querySelector(sliderClass) ?? null;
  const slides = document.querySelectorAll(slidesClass) ?? null;

  if (!sliderBlock && !slides) return;

  const dots = document.querySelectorAll(dotsClass);
  const sliderBtn = document.querySelector(buttonClass);

  const dotActive = 'dot-active';
  const slideActive = 'portfolio-item-active';

  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;


  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);

  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(dotsClass, sliderBtn)) {
      return
    }

    prevSlide(slides, currentSlide, slideActive);
    prevSlide(dots, currentSlide, dotActive);

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActive);
    nextSlide(dots, currentSlide, dotActive);
  });

  const stopSlide = () => {
    clearInterval(interval);
  }


  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches(dotsClass, sliderBtn)) {
      stopSlide();
    }
  }, true)
  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches(dotsClass, sliderBtn)) {
      startSlide(timeInterval);
    }
  }, true)

  startSlide(timeInterval);
}

export default slider;