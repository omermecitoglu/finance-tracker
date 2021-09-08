import React from "react";
import { Container } from "@material-ui/core";
import Currency from "./currency";
import EntriesList from "./entries/list";
import NewEntry from "./entries/new";
import Filters from "./entries/filters";

const App = () => (
	<Container>
		<Currency />
		<NewEntry />
		<Filters />
		<EntriesList />
	</Container>
);

export default App;
