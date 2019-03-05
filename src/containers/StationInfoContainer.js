import { connect } from "react-redux";
import { LoadStationInfo } from "../actions/stationInfo";
import { labelStation } from "../constants/appConstants.js";
import { updateStationInfoInput } from "../actions/ui";
import AirportComponent from "../components/AirportComponent";

const mapStateToProps = state => ({
  label: labelStation,
  input: state.ui.stationInfoInput,
  data: state.stationInfo
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadStationInfo(id)),
  updateInput: input => dispatch(updateStationInfoInput(input))
});

export const StationInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AirportComponent);
