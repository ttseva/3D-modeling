const validation = () => {
  const calcInputs = document.querySelectorAll('.calc-item');
  calcInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/g, '');
    })
  })
}

export default validation;