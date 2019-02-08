import { connect } from "react-redux";
import DataComponent from "../components/DataComponent.js";

const mapStateToProps = state => ({
  data: state.reports
});

const mapDispatchToProps = () => ({
  // no dispatches
});

export const ReportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataComponent);
