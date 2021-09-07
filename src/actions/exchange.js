export default {
	add: (from, to, rate) => ({
		type: "ADD_EXCHANGE_RATE",
		from,
		to,
		rate,
	}),
	clear: () => ({
		type: "CLEAR_EXCHANGE_RATES",
	}),
};
