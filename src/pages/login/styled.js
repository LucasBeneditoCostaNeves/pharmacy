import styled from "styled-components";

export const BodyStyled = styled.div`
  margin-top: 15px;

  h2 {
    font-weight: 700;
    font-size: 62px;
    line-height: 105px;
    display: flex;
  }

  h3 {
    font-weight: 700;
    font-size: 120px;
    line-height: 105px;
    display: flex;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .red {
    color: var(--color-primary);
    margin-left: 13px;
  }

  .margin-left {
    margin-left: 15px;
  }

  @media (max-width: 700px) {
    h2 {
      font-weight: 700;
      font-size: 50px;
      line-height: 85px;
      display: flex;
      line-height: 70px;
    }

    .flex {
      flex-wrap: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .red {
      margin-left: 0px;
    }

    h3 {
      font-weight: 700;
      font-size: 45px;
      line-height: 65px;
      display: flex;
    }
  }
`;

export const DivStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: var(--gray-6);
`;

export const FormStyled = styled.form`
  margin: 92px auto 0px auto;
  min-width: 250px;
  width: 60%;
  max-width: 360px;
  padding: 25px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #ffffff;

  h1 {
    color: var(--gray-5);
    font-weight: 600;
    font-size: 28px;
  }

  input {
    height: 36px;
    margin: 8px 0px;
  }

  label {
    top: 19px;
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
    text-shadow: 0px 3px 0px var(--gray-5);
    width: 100%;
    margin: 5px 0px 15px;
    border: none;
  }

  button:hover {
    background: linear-gradient(to bottom, v 5%, var(--color-primary-25) 100%);
    background-color: var(--color-primary-25);
  }

  button:active {
    position: relative;
    top: 1px;
  }

  .top-form {
    display: flex;
    justify-content: space-between;
  }

  .x {
    font-size: 18px;
    background-color: var(--color-primary);
    border-radius: 80%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    cursor: pointer;
  }

  animation-duration: 2s; /* don't forget to set a duration! */
`;
