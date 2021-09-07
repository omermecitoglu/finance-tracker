const defaults = {
	current: "EUR",
};

export default (state = defaults, action) => {
	switch(action.type) {
		case "SET_CURRENT_CURRENCY":
			return {
				...state,
				current: action.currency,
			};
		case "RESET_CURRENCY":
			return defaults;
		default:
			return state;
	}
};
