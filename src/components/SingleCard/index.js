import React from "react";
import styled from "styled-components";
import Form from "./../Form";

const StyledSingleCard = styled.div`
  width: 350px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  margin-top: 100px;

  h3 {
    text-align: center;
    font-size: 18px;
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

  .card-wrapper {
    padding: 16px;
    .info-box {
      display: flex;
      justify-content: space-evenly;
      margin-top: -10px;
      margin-bottom: 10px;

      p {
        color: #6e6e6e;
      }
    }
  }

  .ingredients {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
  ul {
    padding-left: 15px;
  }

  .btn-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  button {
    background-color: #0b9f01;
    width: 100px;
    height: 40px;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
    border: none;
    font-size: 16px;
    color: white;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(0.95);
      background-color: #097701;
    }
  }

  .order-form {
    display: flex;
    flex-direction: column;
    display: none;
  }
`;

function SingleCard(props) {
  const [form, setForm] = React.useState("none");

  function displayForm() {
    const showForm = form === "none" ? "block" : "none";
    setForm(showForm);
  }
  return (
    <StyledSingleCard key={props.i}>
      <img className="image" alt="food" src={props.image}></img>
      <div className="card-wrapper">
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
        <div className="btn-wrapper">
          <Form style={form}></Form>
          <button onClick={displayForm}>Reserve</button>
        </div>
      </div>
    </StyledSingleCard>
  );
}

export default SingleCard;
