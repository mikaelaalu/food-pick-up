import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  width: 100wv;
  heigth: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 100;
  }
`;

function Loading() {
  return (
    <StyledLoading>
      <h2>Loading...</h2>
    </StyledLoading>
  );
}

export default Loading;
