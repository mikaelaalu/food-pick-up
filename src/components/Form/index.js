import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100px;
  margin-top: 30px;
  label {
    margin-top: 5px;
  }
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: 1px solid black;
    height: 20px;
  }
`;

function Form(props) {
  return (
    <div onClick={props.handleClick} style={{ display: props.style }}>
      <StyledForm>
        <label>Name</label>
        <input></input>
        <label>Portions</label>
        <input></input>
      </StyledForm>
    </div>
  );
}

export default Form;
