import React from "react";
import Button from "./../Button";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  margin: 40px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  h3 {
    color: red;
  }

  img {
    width: 400px;
    height: 300px;
  }

  div {
    padding: 10px;
  }
`;

function Card(props) {
  return (
    <StyledDiv key={props.i}>
      <img alt="food" src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <p>{props.price} kr</p>
        <p>{props.date}</p>
        <p>{props.address}</p>
        <Button slug={props.slug} />
      </div>
    </StyledDiv>
  );
}

export default Card;
