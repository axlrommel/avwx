import {
  REPORT_INPUT_UPDATE,
  STATION_INFO_INPUT_UPDATE
} from "../constants/actionTypes";

export const updateReportInput = selected => ({
  type: REPORT_INPUT_UPDATE,
  selected
});

export const updateStationInfoInput = selected => ({
  type: STATION_INFO_INPUT_UPDATE,
  selected
});
