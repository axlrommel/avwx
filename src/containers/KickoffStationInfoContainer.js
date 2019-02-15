import { connect } from "react-redux";
import KickoffComponent from "../components/KickoffComponent";
import { LoadStationInfo } from "../actions/stationInfo";
import { labelStation } from "../constants/appConstants.js";
import { updateStationInfoInput } from "../actions/ui";

const mapStateToProps = state => ({
  label: labelStation,
  input: state.ui.stationInfoInput
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadStationInfo(id)),
  updateInput: input => dispatch(updateStationInfoInput(input))
});

export const KickoffStationInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KickoffComponent);
