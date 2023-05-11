import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  width: 98%;
  overflow-x: auto;
  margin-left: 20px;
  margin-top: 5px;
::-webkit-scrollbar {
  width: 1px; /* Largura da barra de rolagem */
  height: 7px;
  border-radius: 100px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* Cor de fundo da área da barra de rolagem */
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary); /* Cor da barra de rolagem */
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-25); /* Cor da barra de rolagem ao passar o mouse */
}

  @media (min-width: 800px) {
    display: flex;
    width: 97%;
  }
  
`;

export const DivStyled = styled.div`
  width: 95%;
  h1 {
    display: flex;
    margin: 34px 30px 0px;
    font-size: 27px;
    font-weight: 700;
    color: #34a0a4;
    text-shadow: 0px 1px 0px var(--gray-5);
  }
`;
