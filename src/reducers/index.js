import { combineReducers } from "redux";
import currency from "./currency";
import entries from "./entries";

export default combineReducers({
	currency,
	entries,
});
