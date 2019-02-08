import { fetchReport } from "../api/fetch.js";
import { GET_REPORTS } from "../constants/actionTypes";
import { pipeP } from "ramda";

const getReports = selected => ({
  type: GET_REPORTS,
  selected
});

export const LoadReport = selected => dispatch =>
  pipeP(
    () => fetchReport(selected),
    getReports,
    dispatch
  )();
