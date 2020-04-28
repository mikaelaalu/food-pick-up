import React from "react";

import styled from "styled-components";

const StyledSingleCard = styled.div`
  width: 800px;
  height: 600px;
  margin: 40px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);

  h3 {
    color: red;
  }

  img {
    width: 800px;
    height: 300px;
  }

  div {
    padding: 10px;
  }
`;

function SingleCard(props) {
  return (
    <StyledSingleCard key={props.i}>
      <img className="image" alt="food" src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <ul>
          {props.ingredients.map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>;
          })}
        </ul>
        <p>{props.portions} Portions</p>
        <p>{props.price} Kr</p>
        <p>{props.date}</p>
        <p>{props.address}</p>
      </div>
    </StyledSingleCard>
  );
}

export default SingleCard;
