import React from "react";

function Card(props) {
  return (
    <div>
      <div key={props.i}>
        <h3>{props.title}</h3>
        <img alt="food" src={props.image}></img>
        <p>{props.price} kr</p>
        <p>{props.date}</p>
        <p>{props.address}</p>
      </div>
    </div>
  );
}

export default Card;
