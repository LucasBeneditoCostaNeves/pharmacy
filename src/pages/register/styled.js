import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 20px auto 0px auto;
  min-width: 250px;
  width: 60%;
  max-width: 360px;
  padding: 25px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: var(--gray-5);

  h1 {
    font-size: 24px;
    font-weight: bolder;
  }

  input{
    height: 38px;
  }

  button {
    background-color: var(--color-primary);
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    padding: 14px 76px;
    text-decoration: none;
    text-shadow: 0px 3px 0px var(--gray-6);
    width: 100%;
    border: none;
  }
`;
