import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/currency";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const Currency = ({ currency, handleChange }) => (
	<FormControl variant="outlined">
		<InputLabel id="demo-simple-select-label">Currency</InputLabel>
		<Select value={currency} onChange={handleChange} label="Currency">
			<MenuItem value="EUR">€ Euro</MenuItem>
			<MenuItem value="USD">$ Dolar</MenuItem>
			<MenuItem value="TRY">₺ Lira</MenuItem>
		</Select>
	</FormControl>
);

const mstp = ({ currency }) => ({
	currency: currency.current,
});

const mdtp = (dispatch) => ({
	handleChange: (event) => {
		dispatch(actions.setCurrent(event.target.value));
	},
});

export default connect(mstp, mdtp)(Currency);
