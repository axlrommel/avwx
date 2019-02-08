import { connect } from "react-redux";
import KickoffComponent from "../components/KickoffComponent";
import { LoadStationInfo } from "../actions/stationInfo";
import { labelStation } from "../constants/appConstants.js";

const mapStateToProps = () => ({
  label: labelStation
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadStationInfo(id))
});

export const KickoffStationInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KickoffComponent);
