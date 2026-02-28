import {animate} from "./helpers.js";

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (!(window.innerWidth < 768)) {
        modal.style.display = 'block';

        animate({
          duration: 500,
          easing: "linear",
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.transform = `translateX(0%) translateY(${(1 - progress) * 100}%`
          }
        })

      }
    })
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  })
}

export default modal;