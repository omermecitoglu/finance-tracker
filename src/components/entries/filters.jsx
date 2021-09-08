import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/filter";

const Link = ({ name, clickHandler }) => (
	<a href="#" onClick={clickHandler}>{name}</a>
);

const mdtp = (dispatch, ownProps) => ({
	clickHandler: (event) => {
		event.preventDefault();
		dispatch(actions.set(ownProps.filter));
	},
});

const FilterLink = connect(null, mdtp)(Link);

const Filters = () => (
	<div>
		<FilterLink name="Show All" filter="ALL" />
		{" | "}
		<FilterLink name="Show Incomes" filter="INCOMES" />
		{" | "}
		<FilterLink name="Show Expenses" filter="EXPENSES" />
	</div>
);

export default Filters;
