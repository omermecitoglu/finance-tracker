import React from "react";
import { TableRow, TableCell, Tooltip } from "@material-ui/core";
import { price } from "./utils";

const Entry = ({ name, plus, amount, currency }) => (
	<TableRow>
		<TableCell component="th" scope="row">{name}</TableCell>
		<TableCell align="right">
			<Tooltip title={price(plus, amount, currency)}>
				<span>{price(plus, amount, currency)}</span>
			</Tooltip>
		</TableCell>
	</TableRow>
);

export default Entry;
