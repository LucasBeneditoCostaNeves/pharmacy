import React, { useContext, useEffect } from "react";
import { CreateContextApplication } from "../../context/fullcontext";
import { Card } from "../card";
import { DivStyled, UlStyled } from "./styled";

export const List = ({ titulo, lista }) => {
  return (
    <DivStyled>
      <h1>{titulo}</h1>
      <UlStyled>{lista && lista.map((element) => Card(element))}</UlStyled>
    </DivStyled>
  );
};
