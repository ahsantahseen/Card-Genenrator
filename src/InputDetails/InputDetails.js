import React from "react";
import "./InputDetails.css";
const InputComp = (props) => {
  return (
    <center>
      <div className="inputpanel">
        <h2>Enter Details</h2>
        <input
          name="name"
          className="inputbox"
          placeholder="enter name"
          onChange={props.changed}
        ></input>
        <input
          name="age"
          className="inputbox"
          placeholder="enter age"
          onChange={props.changed}
        ></input>
      </div>

      <button className="button" onClick={props.clicked}>
        Generate Card
      </button>
    </center>
  );
};
export default InputComp;
