import React from "react";

import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100vw;
  height: 50px;
  background-color: tomato;
  position: fixed;
  h1 {
    color: blue;
    text-align: center;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Food pick up</h1>
    </StyledHeader>
  );
}

export default Header;
