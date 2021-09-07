export function symbol(currency) {
	switch(currency) {
		case "EUR": return "€";
		case "USD": return "$";
		case "TRY": return "₺";
		default: return "";
	}
}
