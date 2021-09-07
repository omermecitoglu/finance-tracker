import { v4 as uuidv4 } from "uuid";

export default {
	create: (name, plus, amount, currency) => ({
		type: "CREATE_ENTRY",
		uuid: uuidv4(),
		name,
		plus,
		amount,
		currency,
	}),
};
