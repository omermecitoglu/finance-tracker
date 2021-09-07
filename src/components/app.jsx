import React from "react";
import { Container } from "@material-ui/core";
import Currency from "./currency";
import EntriesList from "./entries/list";

const App = () => (
	<Container>
		<Currency />
		<EntriesList />
	</Container>
);

export default App;
