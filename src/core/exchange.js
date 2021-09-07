import actions from "~/actions/exchange";

const api = "http://api.exchangeratesapi.io/v1/latest";
const access_key = "c4e3318628cfd44a39e4f39400316ca4";
const base_currency = "EUR";
const valid_currencies = ["EUR", "USD", "TRY"];

function pick(obj) {
	return Object.fromEntries(Object.entries(obj).filter(([key]) => valid_currencies.includes(key)));
}

export default {
	fetch: async () => {
		const response = await fetch(api + "?access_key=" + access_key);
		const data = await response.json();
		if(data.error) {
			throw new Error(data.error.message);
		}
		if(!data.success) {
			throw new Error("Failed to fetch currency data.");
		}
		return pick(data.rates);
	},
	seed: (store, data) => {
		store.dispatch(actions.clear());
		const currencies = Object.keys(data);

		while(currencies.length) {
			const fc = currencies.shift();
			for(const tc of currencies) {
				if(fc === base_currency) {
					store.dispatch(actions.add(fc, tc, data[tc]));
				} else {

					// from https://www.investopedia.com/articles/forex/09/currency-cross-triangulation.asp
					// Cross Exchange Rate Formula
					// FROM/TO = (FROM/EUR) * (EUR/TO)

					const rate = (1/data[fc]) * data[tc];
					store.dispatch(actions.add(fc, tc, rate));
				}
			}
		}
	},
};
