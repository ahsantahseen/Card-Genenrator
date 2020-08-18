import React, { useEffect, useState } from "react";
import "./CardComponent.css";

const CardComponent = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="pic"
        />
        <div class="container">
          <p>
            <b>NAME: </b>
            {props.name}
          </p>
          <p>
            <b>AGE: </b>
            {props.age}
          </p>
        </div>
        <div className="options">
          <div className="print"></div>

          <div className="save"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardComponent;
