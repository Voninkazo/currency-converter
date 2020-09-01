import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './element.js';

export function init() {
    const form = document.querySelector('.app form');
    const optionsHTML = generateOptions(currencies);
    // Populating the options elements with the data from the optionsHTML
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
    form.addEventListener('input', handleInput);
}