import React from "react";

const DisabledTextBox = props => 
  <>
      <label>{props.label}</label>
      <input disabled type="text" value={props.value} />
  </>

export default DisabledTextBox