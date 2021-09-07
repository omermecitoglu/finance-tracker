const entry = (state, action) => {
	switch(action.type) {
		case "CREATE_ENTRY":
			return {
				uuid: action.uuid,
				name: action.name,
				plus: action.plus,
				amount: action.amount,
				currency: action.currency,
			};
		default:
			return state;
	}
};

export default (state = [], action) => {
	switch(action.type) {
		case "CREATE_ENTRY":
			return [
				...state,
				entry(undefined, action),
			];
		case "CLEAR_ENTRIES":
			return [];
		default:
			return state;
	}
};
