import React from "react";
import Button from "./../Button";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 350px;
  margin: 40px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  margin-bottom: 50px;

  h3 {
    color: red;
    text-align: center;
    padding: 10px;
  }

  img {
    width: 350px;
    height: 300px;
    object-fit: cover;
  }

  div {
    padding: 5px;

    div {
      display: flex;
      justify-content: space-evenly;

      p {
        color: #6e6e6e;
      }
    }
  }
`;

function Card(props) {
  return (
    <StyledDiv key={props.i}>
      <img alt="food" src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <div>
          <p>{props.price} kr</p>
          <p>{props.date}</p>
          <p>{props.address}</p>
        </div>
        <Button slug={props.slug} />
      </div>
    </StyledDiv>
  );
}

export default Card;
