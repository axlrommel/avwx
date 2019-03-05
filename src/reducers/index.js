import { combineReducers } from "redux";
import reports from "./reports.js";
import stationInfo from "./stationInfo.js";

export default combineReducers({
  reports,
  stationInfo
});
