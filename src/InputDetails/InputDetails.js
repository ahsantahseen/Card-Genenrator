import React from "react";
import "./InputDetails.css";
const InputComp = () => {
  return (
    <div className="inputpanel">
      <h2>Enter Details</h2>
      <input name="name" className="inputbox" placeholder="enter name"></input>
      <input
        name="email"
        className="inputbox"
        placeholder="enter email"
      ></input>
    </div>
  );
};
export default InputComp;
