import { connect } from "react-redux";
import DataComponent from "../components/DataComponent.js";

const mapStateToProps = state => ({
  data: state.stationInfo
});

const mapDispatchToProps = () => ({
  // no dispatches
});

export const StationInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
