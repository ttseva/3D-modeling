import timer from './modules/timer.js'
import menu from './modules/menu.js'
import modal from './modules/modal.js'
import validation from './modules/validation.js'
import tabs from './modules/tabs.js'
import slider from './modules/slider.js'
import dots from './modules/dots.js'

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


