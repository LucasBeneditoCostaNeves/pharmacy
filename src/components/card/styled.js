import styled from "styled-components";

export const Li = styled.li`
  border-radius: var(--radius-4);
  border: 3px solid var(--color-primary-25);
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .img {
    background-color: #f5f5e9;
    width: 200px;
    height: 180px;
    padding: 10px;
  }
  .div {
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  .h2 {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 600;
  }
  .span {
    color: var(--cinza-100);
    font-size: 14px;
    margin: 5px 0px;
  }
  .p {
    color: var(--verde);
    font-weight: 700;
    margin: 12px 0px;
  }
  button {
    background-color: var(--color-primary);
    border-radius: var(--radius-4);
    display: inline-block;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px var(--gray-5);
    width: 88%;
    margin: 0px auto 15px 0px;
    border: none;
    width: 162px;
    padding: 10px 0px;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .button {
      margin: 10px 0px;
    }
    .img {
      background-color: var(--branco);
    }
  }
`;
