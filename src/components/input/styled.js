import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px 0px;

  input {
    height: 28px;
    padding: 4px;
    font-size: 14px;
    border-width: 2px;
    border-color: var(--color-primary);
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: var(--radius-6);
    box-shadow: rgb(61 64 61 / 97%) 0px 0px 2px;
    text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
  }

  label {
    max-width: max-content;
    position: relative;
    background: white;
    top: 8px;
    left: 10px;
    font-weight: 600;
    color: var(--gray-5);
  }

  button{
    display: flex;
  }

  span{
    color: red
  }

`;
