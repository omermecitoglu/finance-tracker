import React from "react";
import { connect } from "react-redux";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@material-ui/core";
import Entry from "./entry";
import { price, sum, pluck } from "./utils";

function filterEntries(entries, filter) {
	switch(filter) {
		case "INCOMES":
			return entries.filter(e=>e.amount>0);
		case "EXPENSES":
			return entries.filter(e=>e.amount<0);
		default:
			return entries;
	}
}

const List = ({ entries, filter, currency, exchangeRates }) => {
	const filtered_entries = filterEntries(entries, filter);
	return (
		<TableContainer component={Paper}>
			<Table>
				<caption>
					<Typography align="right">
					Total: {price(sum(pluck(filtered_entries, currency, exchangeRates)), currency)}
					</Typography>
				</caption>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>&nbsp;</TableCell>
						<TableCell>&nbsp;</TableCell>
						<TableCell align="right">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filtered_entries.map(entry => (
						<Entry key={entry.uuid} {...entry} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const mstp = ({ entries, filter, currency, exchange }) => ({
	entries,
	filter,
	currency: currency.current,
	exchangeRates: exchange,
});

export default connect(mstp, null)(List);
