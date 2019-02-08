import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Root from "./components/Root";
import rootReducer from "./reducers";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import defaultState from "./reducers/defaultState";

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(ReduxThunk, logger)
);

render(<Root store={store} />, document.getElementById("root"));
