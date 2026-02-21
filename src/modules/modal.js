const modal= () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      modal.style.display = 'block';
    })
  })

  closeBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
  })
}

export default modal;