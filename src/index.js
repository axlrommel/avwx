import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import App from "./components/App";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import reports from "./reducers/reports.js";
import stationInfo from "./reducers/stationInfo.js";

const defaultState = {
  reports: [],
  stationInfo: []
};

const store = createStore(
  combineReducers({
    reports,
    stationInfo
  }),
  defaultState,
  applyMiddleware(ReduxThunk, logger)
);

render(<App store={store} />, document.getElementById("root"));
