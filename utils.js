// named export
export function generateOptions(options) {
    // Translating a big object into an array so that we can map through it
    // we destructure the array directly in the parameter definition 
    return Object.entries(options).map(([currencyCode, currencyName]) => {
        return `
			<option value="${currencyCode}">
				${currencyCode} - ${currencyName}
			</option>
		`;
    }).join('');
}

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('fr-FR', {
        style: "currency",
        currency,
    }).format(amount);
}