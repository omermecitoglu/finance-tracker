import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "~/actions/entries";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";

function Update({ uuid, name, amount, confirm }) {

	const [values, setValues] = useState({
		open: false,
		name,
		amount,
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
		confirm(uuid, values.name, values.amount);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>Edit</Button>
			<Dialog
				open={values.open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Edit Entry</DialogTitle>
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
					<Button onClick={handleConfirm} color="primary">Save</Button>
					<Button onClick={handleClose} color="secondary" autoFocus>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const mdtp = (dispatch) => ({
	confirm: (uuid, name, amount) => {
		dispatch(actions.update(uuid, name, parseFloat(amount)));
	},
});

export default connect(null, mdtp)(Update);
