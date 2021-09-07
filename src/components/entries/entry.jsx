import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function symbol(currency) {
	switch(currency) {
		case "EUR": return "€";
		case "USD": return "$";
		case "TRY": return "₺";
		default: return "";
	}
}

const Entry = ({ name, plus, amount, currency }) => (
	<TableRow>
		<TableCell component="th" scope="row">{name}</TableCell>
		<TableCell align="right">
			{plus ? "" : "-"}
			{symbol(currency)}
			{amount}
		</TableCell>
	</TableRow>
);

export default Entry;
