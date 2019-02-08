import reports, { defaultState } from "./reports";
import { GET_REPORTS } from "../constants/actionTypes";

const fetchResult = {
  reports: [
    {
      foo: "bar",
      raw_text: "raw",
      observation_time: "time",
      flight_category: "category"
    }
  ]
};

const stateWithOneReport = [
  {
    reports: [
      {
        foo: "bar1",
        raw_text: "raw1",
        observation_time: "time1",
        flight_category: "category1"
      }
    ]
  }
];

describe("todo actions", () => {
  it("should handle initial state", () => {
    expect(reports(undefined, {})).toEqual(defaultState);
  });
  it("should handle GET_REPORTS when result is not correct", () => {
    const newState = reports(defaultState, {
      type: GET_REPORTS,
      selected: { foo: "bar" }
    });
    expect(newState).toEqual(defaultState);
  });
  it("should handle GET_REPORTS for first report", () => {
    const newState = reports(defaultState, {
      type: GET_REPORTS,
      selected: fetchResult
    });
    expect(newState.length).toEqual(1);
  });
  it("should handle GET_REPORTS for second report", () => {
    const newState = reports(stateWithOneReport, {
      type: GET_REPORTS,
      selected: fetchResult
    });
    expect(newState.length).toEqual(2);
  });
});
