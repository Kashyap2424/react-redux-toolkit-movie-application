import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import { reduxStore } from "./features/ReduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
