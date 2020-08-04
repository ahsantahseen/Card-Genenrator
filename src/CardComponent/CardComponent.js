import React from "react";
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
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardComponent;
