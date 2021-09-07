import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { symbol } from "./utils";

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
