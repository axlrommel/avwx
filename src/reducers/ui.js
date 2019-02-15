import {
  REPORT_INPUT_UPDATE,
  STATION_INFO_INPUT_UPDATE
} from "../constants/actionTypes";
import { assoc } from "ramda";
export const defaultState = {
  reportsInput: "",
  stationInfoInput: ""
};

const ui = (state = defaultState, action) => {
  switch (action.type) {
    case REPORT_INPUT_UPDATE:
      return assoc("reportsInput", action.selected, state);
    case STATION_INFO_INPUT_UPDATE:
      return assoc("stationInfoInput", action.selected, state);
    default:
      return state;
  }
};

export default ui;
