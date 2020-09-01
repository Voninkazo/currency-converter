const endpoint = `https://api.exchangeratesapi.io/latest`;
// Cache the values from the api
const ratesBybase = {};

// lib contains he core functionality of our projects
// Fetch the latest exchange converter
export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endpoint}?base=${base}`);
    // turn the string from the api into object
    const rates = await res.json();
    // return the rates, otherwise it does not work
    return rates;
}
// convert the data from the api into an object
export async function convert(amount, from, to) {
    if (!ratesBybase[from]) {
        // fetch the api values from the ${from}
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        ratesBybase[from] = rates;
    }
    // convert that amount that they passed it
    const rate = ratesBybase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}!`);
    return convertedAmount;
}