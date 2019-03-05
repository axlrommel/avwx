import { connect } from "react-redux";
import AirportComponent from "../components/AirportComponent";
import { LoadReport } from "../actions/report.js";
import { labelReports } from "../constants/appConstants.js";

const mapStateToProps = state => ({
  label: labelReports,
  data: state.reports
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(LoadReport(id))
});

export const ReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AirportComponent);
