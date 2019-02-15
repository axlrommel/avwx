import ui, { defaultState } from "./ui";
import {
  REPORT_INPUT_UPDATE,
  STATION_INFO_INPUT_UPDATE
} from "../constants/actionTypes";

describe("todo actions", () => {
  it("should handle initial state", () => {
    expect(ui(undefined, {})).toEqual(defaultState);
  });
  it("should handle REPORT_INPUT_UPDATE", () => {
    const newState = ui(defaultState, {
      type: REPORT_INPUT_UPDATE,
      selected: "foo"
    });
    expect(newState).toEqual({ reportsInput: "foo", stationInfoInput: "" });
  });
  it("should handle STATION_INFO_INPUT_UPDATE", () => {
    const newState = ui(defaultState, {
      type: STATION_INFO_INPUT_UPDATE,
      selected: "bar"
    });
    expect(newState).toEqual({ stationInfoInput: "bar", reportsInput: "" });
  });
});
