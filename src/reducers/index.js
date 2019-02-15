import { combineReducers } from "redux";
import reports from "./reports.js";
import stationInfo from "./stationInfo.js";
import ui from "./ui.js";

export default combineReducers({
  reports,
  stationInfo,
  ui
});
