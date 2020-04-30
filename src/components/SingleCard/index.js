import React from "react";
import styled from "styled-components";

const StyledSingleCard = styled.div`
  width: 350px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  margin-top: 100px;

  h3 {
    color: red;
    text-align: center;
  }
  .portions {
    text-align: right;
    margin-top: -20px;
    margin-bottom: 20px;
  }
  img {
    width: 350px;
    height: 300px;
    object-fit: cover;
  }

  div {
    padding: 10px;
    .info-box {
      display: flex;
      justify-content: space-evenly;

      p {
        color: #6e6e6e;
      }
    }
  }

  .ingredients {
    border: 1px solid #6e6e6e;
    width: 50%;
  }
  ul {
    list-style-type: none;
  }
`;

function SingleCard(props) {
  return (
    <StyledSingleCard key={props.i}>
      <img className="image" alt="food" src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <p className="portions">{props.portions} Portions</p>

        <div className="info-box">
          <p>{props.price} Kr</p>
          <p>{props.date}</p>
          <p>{props.address}</p>
        </div>
        <p>{props.description}</p>

        <div className="ingredients">
          <p>Ingredients:</p>
          <ul>
            {props.ingredients.map((ingredient, i) => {
              return <li key={i}>{ingredient}</li>;
            })}
          </ul>
        </div>
      </div>
    </StyledSingleCard>
  );
}

export default SingleCard;
