import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, history } from "./reducers/store";
import { ConnectedRouter } from "react-router-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} store={store}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
