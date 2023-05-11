import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  min-height: 80px;
  background: var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;

  .red{
    color: var(--color-primary);
  }

  .carrinho{
    width: 46px;
    height: 42px;
    cursor: pointer;
    margin-right: 14px;
  }

  @media (max-width: 584px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 584px) {
      width: 104%;
      justify-content: space-evenly;
    }
    a {
      font-weight: bold;
      :hover {
        color: var(--color-primary);
      }
    }
  }
  .btnLogin {
    background-color: var(--color-primary);
    color: var(--gray-1);
    padding: 10px 20px;
    border-radius: var(--radius-8);
    font-weight: bold;
    font-size: 18px;

    :hover {
    background: linear-gradient(to bottom, v 5%, var(--color-primary-25) 100%);
    background-color: var(--color-primary-25) ;
    }
  }

  .div-int {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
    flex-wrap: wrap;
  }

  h1 {
    font-weight: 600;
    font-size: 32px;
  }

  img {
    width: 161px;
    border-radius: var(--radius-8);
  }

  button {
    border: none;
    background: linear-gradient(to bottom, v 5%, var(--color-primary-25) 100%);
    background-color: var(--color-primary-25) ;
    cursor: pointer;
  }

  @media  (max-width: 700px){
    padding: 0px;
    
    div{
        display: flex;
        justify-content: center;
    }
    
    .div-int{
        justify-content: center;
    }
  }

  .logout{
    background-color: var(--color-primary);
    color: var(--gray-1);
    padding: 10px;
    width: 60px;
    border-radius:var(--radius-6);
  }
`;
