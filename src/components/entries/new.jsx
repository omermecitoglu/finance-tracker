import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "~/actions/entries";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewEntry = ({ currency, confirm }) => {

	const [values, setValues] = useState({
		open: false,
		name: "",
		amount: 0,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickOpen = () => {
		setValues({ ...values, open: true });
	};

	const handleClose = () => {
		setValues({ ...values, open: false });
	};

	const handleConfirm = () => {
		setValues({ ...values, open: false });
		confirm(values.name, values.amount, currency);
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleClickOpen}>New</Button>
			<Dialog open={values.open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">New Entry</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						autoComplete="off"
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
						value={values.name}
						onChange={handleChange("name")}
					/>
					<TextField
						autoComplete="off"
						margin="dense"
						id="name"
						label="Amount"
						type="number"
						fullWidth
						value={values.amount}
						onChange={handleChange("amount")}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleConfirm} color="primary">Create</Button>
					<Button onClick={handleClose} color="secondary">Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mstp = ({ currency }) => ({
	currency: currency.current,
});

const mdtp = (dispatch) => ({
	confirm: (name, amount, currency) => {
		dispatch(actions.create(name, parseFloat(amount), currency));
	},
});

export default connect(mstp, mdtp)(NewEntry);
