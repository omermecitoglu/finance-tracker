import React from "react";
import { connect } from "react-redux";
import { TableRow, TableCell, Tooltip } from "@material-ui/core";
import Update from "./update";
import Destroy from "./destroy";
import { price, convert } from "./utils";

const Entry = ({ uuid, name, amount, currency, targetCurrency, exchangeRates }) => (
	<TableRow>
		<TableCell component="th" scope="row">{name}</TableCell>
		<TableCell align="right">
			<Update uuid={uuid} name={name} amount={amount} />
		</TableCell>
		<TableCell align="right">
			<Destroy uuid={uuid} />
		</TableCell>
		<TableCell align="right">
			<Tooltip title={currency !== targetCurrency ? price(amount, currency) : ""}>
				<span>{price(convert(exchangeRates, currency, targetCurrency, amount), targetCurrency)}</span>
			</Tooltip>
		</TableCell>
	</TableRow>
);

const mstp = ({ currency, exchange }) => ({
	targetCurrency: currency.current,
	exchangeRates: exchange,
});

export default connect(mstp, null)(Entry);
