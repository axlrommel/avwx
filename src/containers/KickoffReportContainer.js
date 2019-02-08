import { connect } from "react-redux";
import KickoffComponent from "../components/KickoffComponent";
import { LoadReport } from "../actions/report.js";
import { labelReports } from "../constants/appConstants.js";

const mapStateToProps = () => ({
  label: labelReports
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadReport(id))
});

export const KickoffReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KickoffComponent);
