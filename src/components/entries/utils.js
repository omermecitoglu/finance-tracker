export function symbol(currency) {
	switch(currency) {
		case "EUR": return "€";
		case "USD": return "$";
		case "TRY": return "₺";
		default: return "";
	}
}

export function price(plus, amount, currency) {
	const content = [
		(plus ? "" : "-"),
		symbol(currency),
		amount.toFixed(2),
	];
	return content.join("");
}

export function sum(items) {
	return items.reduce((a, b) => (a + b), 0);
}

export function pluck(entries, currency, exchange) {
	return entries.map(e => convert(exchange, e.currency, currency, e.amount));
}

export function convert(data, from, to, amount) {
	const result = data.find(e => e.code === from + "_TO_" + to);
	if(from === to) {
		return amount;
	}
	return result ? amount * result.rate : 0;
}
