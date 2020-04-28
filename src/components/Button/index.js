import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: tomato;
  width: 150px;
  height: 50px;
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
