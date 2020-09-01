import { init } from './init.js';
const app = document.querySelector('.app');
app.addEventListener('mouseover', init, { once: true });