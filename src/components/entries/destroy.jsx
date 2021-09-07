import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/entries";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

function Destroy({ uuid, confirm }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleConfirm = () => {
		setOpen(false);
		confirm(uuid);
	};

	return (
		<div>
			<Button variant="outlined" color="secondary" onClick={handleClickOpen}>Destroy</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Destroy Entry</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Do you really want to destroy this entry?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleConfirm} color="secondary">Destroy</Button>
					<Button onClick={handleClose} color="primary" autoFocus>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const mdtp = (dispatch) => ({
	confirm: (uuid) => {
		dispatch(actions.destroy(uuid));
	},
});

export default connect(null, mdtp)(Destroy);
