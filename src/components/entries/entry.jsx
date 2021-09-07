import React from "react";
import { connect } from "react-redux";
import { TableRow, TableCell, Tooltip } from "@material-ui/core";
import { price } from "./utils";

const Entry = ({ name, plus, amount, currency, targetCurrency }) => (
	<TableRow>
		<TableCell component="th" scope="row">{name}</TableCell>
		<TableCell align="right">
			<Tooltip title={currency !== targetCurrency ? price(plus, amount, currency) : ""}>
				<span>{price(plus, amount, targetCurrency)}</span>
			</Tooltip>
		</TableCell>
	</TableRow>
);

const mstp = ({ currency }) => ({
	targetCurrency: currency.current,
});

export default connect(mstp, null)(Entry);
