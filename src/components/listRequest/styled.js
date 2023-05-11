import styled from "styled-components";

export const Container = styled.li`
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  img {
    width: 100px;
    height: 100px;
    background-color: var(--gray-3);
    margin: 14px 20px;
    border-radius: 8px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .coluna {
  }

  .divBotoes {
    display: flex;
    align-items: center;
  }

  .botao{
    border: none;
    color: var(--erro);
    font-size: 18px;
  }

  .nome{
    margin-bottom: 14px;
  }

  .lixeira{
    background-color:#eb2a2a;
	border-radius:28px;
	border:2px solid #bf1b1b;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	padding:11px 21px;
	text-decoration:none;
	text-shadow:0px 2px 0px #050405;
    height: 15px;
  }

  @media (max-width: 500px) {
    img{
        margin: 13px 10px
    }

    .lixeira{
        font-size: 11px;
        padding:8px 18px;
    }
  }
`;