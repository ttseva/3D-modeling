const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  const animationModal = () => {
    let position = 100;
    modal.style.display = 'block';
    modal.style.left = '50%';

    const slideUp = () => {
      position -= 5;
      modal.style.transform = `translateX(-50%) translateY(${position}%)`;

      if (position > 0) {
        requestAnimationFrame(slideUp);
      } else {
        modal.style.transform = 'translateX(-50%) translateY(0)';
      }
    };
    requestAnimationFrame(slideUp);
  };

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (!(window.innerWidth < 768)) {
        animationModal();
      }
    })
  })

  closeBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
  })
}

export default modal;