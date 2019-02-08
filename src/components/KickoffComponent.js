import React from "react";
import PropTypes from "prop-types";

const KickoffComponent = ({ label, getData }) => (
  <label>
    <label>{label}</label>
    <input type="text" name="code" id="inputCode" />
    <button onClick={() => getData(document.getElementById("inputCode").value)}>
      Go!
    </button>
  </label>
);

KickoffComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default KickoffComponent;
