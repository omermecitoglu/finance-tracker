import React from "react";
import { connect } from "react-redux";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@material-ui/core";
import Entry from "./entry";

const List = ({ entries }) => (
	<TableContainer component={Paper}>
		<Table>
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

const mstp = ({ entries }) => ({
	entries,
});

export default connect(mstp, null)(List);
