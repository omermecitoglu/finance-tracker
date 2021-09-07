export function price(amount, currency) {
	const l10n = new Intl.NumberFormat("tr-TR", { style: "currency", currency });
	return l10n.format(amount);
}

export function sum(items) {
	return items.reduce((a, b) => (a + b), 0);
}

export function pluck(entries, currency, exchange) {
	return entries.map(e => convert(exchange, e.currency, currency, e.amount));
}

export function convert(data, from, to, amount) {
	const result = data.find(e => e.code === from + ":" + to);
	if(from === to) {
		return amount;
	}
	return result ? amount * result.rate : 0;
}
