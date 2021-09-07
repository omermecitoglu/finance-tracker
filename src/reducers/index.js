import { combineReducers } from "redux";
import currency from "./currency";
import exchange from "./exchange";
import entries from "./entries";

export default combineReducers({
	currency,
	exchange,
	entries,
});
