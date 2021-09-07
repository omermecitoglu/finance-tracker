import React from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "@material-ui/core";

const App = () => (
	<Container>
		<Button variant="contained" color="primary">Hello World</Button>
	</Container>
);

const body = document.getElementsByTagName("body")[0];
const root = document.createElement("div");
root.id = "root";
body.prepend(root);

ReactDOM.render(<App />, root);
