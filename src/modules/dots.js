const dots = () => {
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsBlock = document.querySelector('.portfolio-dots');

  dotsBlock.replaceChildren();

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('dot-active');
    dotsBlock.appendChild(dot);
  }
}

export default dots;