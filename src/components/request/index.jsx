import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CreateContextApplication } from "../../context/fullcontext";
import { ListRequest } from "../listRequest";
import { Container, DivStyled } from "./styled";

export const Requests = ({ setModalRequest }) => {
  const { requestDataState } = useContext(
    CreateContextApplication
  );

  const uniqueArray = requestDataState.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  
  const price = requestDataState.map((element) => element.price)
  const sum = price.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
},0)

  if (requestDataState.length > 0) {
    return (
      <DivStyled>
        <Container>
          <div className="divP">
            <p className="pCarrinho">Shopping cart</p>
            <span className="x" onClick={() => setModalRequest(false)}>X</span>
          </div>
          <ul className="essa">
            {uniqueArray.map((element) => ListRequest(element))}
          </ul>
          <div className="divValor">
            <span className="spanTotal">Total:</span>
            <span className="valor">R${sum},00</span>
          </div>
          <button className="botaoFinalizar" onClick={() => toast.warning("👷 Em manutenção!")}>Checkout</button>
        </Container>
      </DivStyled>
    );
  } else {
    return (
      <DivStyled>
        <Container>
          <div className="divP">
            <p className="pCarrinho">Carrinho de Compras</p>
            <span className="x" onClick={() => setModalRequest(false)}>
              X
            </span>
          </div>
          <div className="divVazio">
            <h2 className="h2Vazio">Your Bag is empty😥</h2>
            <span className="spanVazio">add items😎</span>
          </div>
        </Container>
      </DivStyled>
    );
  }
};
