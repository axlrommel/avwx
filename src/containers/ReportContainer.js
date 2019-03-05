import { connect } from "react-redux";
import AirportComponent from "../components/AirportComponent";
import { LoadReport } from "../actions/report.js";
import { labelReports } from "../constants/appConstants.js";
import { updateReportInput } from "../actions/ui";

const mapStateToProps = state => ({
  label: labelReports,
  input: state.ui.reportsInput,
  data: state.reports
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadReport(id)),
  updateInput: input => dispatch(updateReportInput(input))
});

export const ReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AirportComponent);
