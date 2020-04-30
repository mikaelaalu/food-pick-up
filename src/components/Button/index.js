import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: tomato;
  width: 100px;
  height: 40px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  border: none;
  font-size: 16px;
  color: white;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(0.95);
    background-color: white;
    color: tomato;
  }
`;
function Button(props) {
  return (
    <div>
      <a href={props.slug}>
        <Btn>Read more</Btn>
      </a>
    </div>
  );
}

export default Button;
