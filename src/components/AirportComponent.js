import React from "react";
import PropTypes from "prop-types";
import {length} from 'ramda';
import DataComponent from './DataComponent';

const AirportComponent = ({ label, getData, input, updateInput, data }) => (
  <>
  <label>
    <label>{label}</label>
    <input
      type="text"
      name="code"
      id="inputCode"
      value={input}
      onChange={e => updateInput(e.target.value)}
    />
    <button disabled={length(input) !== 4} onClick={() => getData(input)}>
      Go!
    </button>
  </label>
  <DataComponent data={data}></DataComponent>
  </>
);

AirportComponent.propTypes = {
  getData: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default AirportComponent;
