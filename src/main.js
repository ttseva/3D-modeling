import './assets/css/style.css'
import { oneFunc } from './modules/one.js'
import { twoFunc } from './modules/two.js'

document.querySelector('#app').innerHTML = `
  <div>
    
  </div>
`
oneFunc();
twoFunc();
