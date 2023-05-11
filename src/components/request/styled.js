import styled from "styled-components";

export const DivStyled = styled.div`
  position: fixed;
  width: 105vw;
  height: 104vh;
  top: 0;
  background-color: var(--gray-6);
`;

export const Container = styled.div`
  width: 80%;
  position: absolute;
  background-color: var(--gray-1);
  top: 70px;
  right: 7%;
  padding-bottom: 28px;
  border-radius: 8px;

  .essa {
    overflow-x: auto;
    max-height: 303px;
  }

  .divP {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    border-radius: 8px 8px 0px 0px;
    color: var(--gray-1);
  }

  .x {
    font-size: 18px;
    margin-right: 15px;
    color: var(--branco);
  }

  .pCarrinho {
    margin-left: 20px;
    font-size: 18px;
    color: var(--branco);
  }

  .lixeira {
    margin: 21px 1px;
    border-radius: 4px;
    padding: 5px;
  }

  .divValor {
    display: flex;
    justify-content: space-between;

    width: 87%;

    margin: 0 auto;

    border-top: 2px solid var(--cinza-100);
  }

  .spanTotal {
    margin: 15px 0px;
    font-weight: 600;
    color: var(--gray-5);
  }

  .valor {
    margin: 20px 0px;
  }

  .botaoFinalizar {
    width: 87%;
    margin: 0 auto;
    display: table;
    background-color: var(--color-primary-25);
    border: none;
    height: 50px;
    border-radius: 6px;
    color: var(--gray-1);
  }

  .divVazio {
    display: flex;
    flex-direction: column;
  }

  .h2Vazio {
    margin: 0 auto;
    width: max-content;
    padding: 45px 0px 15px;
  }

  .spanVazio {
    width: max-content;
    margin: 0 auto 30px;
  }

  @media(max-width: 400px) {
    .lixeira {
      font-size: 11px;
      margin: 42px 1px;
      border-radius: 4px;
      padding: 5px;
    }
  }

  @media (min-width: 700px) {
    width: 500px;
    border-radius: 0px 0px 8px 8px;
    left: 18%;
    border-radius: 8px;

    .lixeira {
      margin: 21px 13px;
    }
  }

  @media (min-width: 800px) {
    left: 19%;
  }

  @media (min-width: 900px) {
    left: 22%;
  }

  @media (min-width: 1000px) {
    left: 23%;
  }

  @media (min-width: 1100px) {
    left: 24%;
  }

  @media (min-width: 1200px) {
    left: 32%;
  }
`;
