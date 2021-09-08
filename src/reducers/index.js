import { combineReducers } from "redux";
import currency from "./currency";
import exchange from "./exchange";
import entries from "./entries";
import filter from "./filter";

export default combineReducers({
	currency,
	exchange,
	entries,
	filter,
});
