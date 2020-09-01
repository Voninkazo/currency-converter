import { convert } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, fromSelect, toSelect, toEl } from './element.js';

export async function handleInput(e) {
    // Add an eventListenr in each elements in the form
    const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
    console.log(rawAmount);
    // 
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}