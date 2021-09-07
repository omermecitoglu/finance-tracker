export default (state = [], action) => {
	switch(action.type) {
		case "ADD_EXCHANGE_RATE":
			return [
				...state,
				{ code: action.from + "_TO_" + action.to, rate: action.rate },
				{ code: action.to + "_TO_" + action.from, rate: 1/action.rate },
			];
		case "CLEAR_EXCHANGE_RATES":
			return [];
		default:
			return state;
	}
};
