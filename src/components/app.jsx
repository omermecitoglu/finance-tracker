import React from "react";
import { Container } from "@material-ui/core";
import Currency from "./currency";
import EntriesList from "./entries/list";
import NewEntry from "./entries/new";

const App = () => (
	<Container>
		<Currency />
		<NewEntry />
		<EntriesList />
	</Container>
);

export default App;
