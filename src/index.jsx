import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, exchange } from "./core";
import App from "./components/app";

const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#F5F5F5";
const root = document.createElement("div");
root.id = "root";
body.prepend(root);

ReactDOM.render(<Provider store={store}><App /></Provider>, root);

exchange.fetch().then(data => exchange.seed(store, data)).catch(error => alert(error.message));
