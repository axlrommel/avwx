import { GET_REPORTS } from "../constants/actionTypes.js";
import { pipe, assoc, append, path, isNil } from "ramda";

export const defaultState = [];

const reports = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPORTS: {
      const report = path(["selected", "reports", 0], action);
      return isNil(report)
        ? state
        : append(
            pipe(
              assoc("raw_text", report.raw_text),
              assoc("observation_time", report.observation_time),
              assoc("flight_category", report.flight_category)
            )({}),
            state
          );
    }
    default:
      return state;
  }
};

export default reports;
