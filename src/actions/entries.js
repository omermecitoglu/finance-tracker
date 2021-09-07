import { v4 as uuidv4 } from "uuid";

export default {
	create: (name, amount, currency) => ({
		type: "CREATE_ENTRY",
		uuid: uuidv4(),
		name,
		amount,
		currency,
	}),
	update: (uuid, name, amount) => ({
		type: "UPDATE_ENTRY",
		uuid,
		name,
		amount,
	}),
	destroy: (uuid) => ({
		type: "DESTROY_ENTRY",
		uuid,
	}),
};
