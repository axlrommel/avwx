import { connect } from "react-redux";
import KickoffComponent from "../components/KickoffComponent";
import { LoadReport } from "../actions/report.js";
import { labelReports } from "../constants/appConstants.js";
import { updateReportInput } from "../actions/ui";

const mapStateToProps = state => ({
  label: labelReports,
  input: state.ui.reportsInput
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadReport(id)),
  updateInput: input => dispatch(updateReportInput(input))
});

export const KickoffReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KickoffComponent);
