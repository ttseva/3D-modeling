import timer from './modules/timer.js'
import menu from './modules/menu.js'
import modal from './modules/modal.js'
import validation from './modules/validation.js'
import tabs from './modules/tabs.js'
import slider from './modules/slider.js'
import dots from './modules/dots.js'
import calc from './modules/calc.js'
import sendForm from "./modules/sendForm.js";

const sliderClass = '.portfolio-content';
const slidesClass = '.portfolio-item';
const dotsClass = '.dot';
const buttonClass = '.portfolio-btn';

timer('28 march 2026');
menu();
modal()
validation();
tabs();
dots();
slider(sliderClass, slidesClass, dotsClass, buttonClass);
calc(100);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({
  formId: 'form2',
});
sendForm({
  formId: 'form3',
});



