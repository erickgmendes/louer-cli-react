import React from "react";

const TextBox = props =>
  <div className="pure-u-1 pure-u-md-1-3">
    <label for={props.id}>{props.label}</label>
    <input
      type="text"
      id={props.id}
      className="pure-u-23-24"
      defaultValue={props.value}
      onChange={props.onChange}
    />
  </div>

export default TextBox