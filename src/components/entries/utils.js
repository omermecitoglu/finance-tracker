export function symbol(currency) {
	switch(currency) {
		case "EUR": return "€";
		case "USD": return "$";
		case "TRY": return "₺";
		default: return "";
	}
}

export function sum(items) {
	return items.reduce((a, b) => (a + b), 0);
}

export function pluck(entries, currency) {
	return entries.map(e => currency_convert(e.amount, e.currency, currency));
}

function currency_convert(amount, from, to) { // temporary
	return amount;
}
