import React from "react";
import ReactDOM from "react-dom";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(shoppingListItemReducer);
ReactDOM.render(
  <Provider>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
