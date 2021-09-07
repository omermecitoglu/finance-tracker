export default (state = [], action) => {
	switch(action.type) {
		case "ADD_EXCHANGE_RATE":
			return [
				...state,
				{ code: action.from + ":" + action.to, rate: action.rate },
				{ code: action.to + ":" + action.from, rate: 1/action.rate },
			];
		case "CLEAR_EXCHANGE_RATES":
			return [];
		default:
			return state;
	}
};
