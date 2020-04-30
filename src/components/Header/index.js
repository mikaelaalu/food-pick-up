import React from "react";

import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100vw;
  height: 60px;
  background-color: tomato;
  position: fixed;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
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
