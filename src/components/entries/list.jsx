import React from "react";
import { connect } from "react-redux";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@material-ui/core";
import Entry from "./entry";
import { symbol, sum, pluck } from "./utils";

const List = ({ entries, currency }) => (
	<TableContainer component={Paper}>
		<Table>
			<caption>
				<Typography align="right">
					Total: {symbol(currency)}{sum(pluck(entries, currency))}
				</Typography>
			</caption>
			<TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell align="right">Amount</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{entries.map(entry => (
					<Entry key={entry.uuid} {...entry} />
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

const mstp = ({ entries, currency }) => ({
	entries,
	currency: currency.current,
});

export default connect(mstp, null)(List);
