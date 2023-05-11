import React, { useContext } from "react";
import { CreateContextApplication } from "../../context/fullcontext";
import { Container } from "./styled";

export const ListRequest = (element) => {
    const { requestDataState, deleteData, postDataUser } = useContext(
        CreateContextApplication
      );

      const filter = requestDataState.filter((object) => object.name == element.name  )

    return (
        <Container>
          <div className="flex">
            <div className="info">
              <img className="img" src={element.img} alt="" />
              <div className="coluna">
                <p className="nome">{element.name}</p>
                <div className="divBotoes">
                  <button className="botao" >-</button>
                  <p className="quantidade">{filter.length}</p>
                  <button className="botao" onClick={() => postDataUser(element)}>+</button>
                </div>
              </div>
            </div>
            <span className="lixeira" onClick={() => deleteData(element.name)}>Remover</span>
          </div>
        </Container>
      );
}