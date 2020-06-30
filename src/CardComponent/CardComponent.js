import React from "react";

const CardComponent = (props) => {
  return (
    <div style={props.style}>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
    </div>
  );
};
export default CardComponent;
