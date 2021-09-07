import { v4 as uuidv4 } from "uuid";

export default {
	create: (name, amount, currency) => ({
		type: "CREATE_ENTRY",
		uuid: uuidv4(),
		name,
		amount,
		currency,
	}),
};
