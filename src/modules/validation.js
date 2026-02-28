const validation = () => {
  const calcInputs = document.querySelectorAll('.calc-item');
  const formInputs = document.querySelectorAll('.main-form input, #form input, .footer-form input');


  calcInputs.forEach(input => {
    if (input.type === 'text') {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/g, '');
      })
    }
  });

  formInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const inputName = input.getAttribute('name');

      if (inputName === 'user_name') {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]/g, '');
      } else if (inputName === 'user_message') {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9\s\.,!?:;"'\(\)\-]/g, '');
      } else if (input.type === 'email') {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, '');
      } else if (input.type === 'tel') {
        e.target.value = e.target.value.replace(/[^0-9\+\-\(\)]/g, '');
      }
    })
  })
}

export default validation;