const entry = (state, action) => {
	switch(action.type) {
		case "CREATE_ENTRY":
			return {
				uuid: action.uuid,
				name: action.name,
				amount: action.amount,
				currency: action.currency,
			};
		case "UPDATE_ENTRY":
			if(state.uuid !== action.uuid) {
				return state;
			}
			return {
				...state,
				name: action.name,
				amount: action.amount,
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
		case "UPDATE_ENTRY":
			return state.map(e => entry(e, action));
		case "DESTROY_ENTRY":
			return state.filter(e => e.uuid !== action.uuid);
		case "CLEAR_ENTRIES":
			return [];
		default:
			return state;
	}
};
