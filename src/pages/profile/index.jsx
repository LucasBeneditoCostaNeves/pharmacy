import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateContextApplication } from "../../context/fullcontext";
import { List } from "../../components/list/index"
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/header";
import { Requests } from "../../components/request";
import { DivStyled } from "./styled";

export const PageProfile = () => {
  const { inserindoDados, fullData } = useContext(CreateContextApplication);
  const [ modalRequest, setModalRequest ] = useState(false)
  useEffect(() => {
    inserindoDados()
  },[])

  const medicament = fullData.filter((element) => element.category === "medicament")
  const vitamin = fullData.filter((element) => element.category === "vitamin")
  const beauty = fullData.filter((element) => element.category === "beauty")
  return (
    <DivStyled>
      <Header logout={"logout"} setModalRequest={setModalRequest}/>
      <List titulo="Medicament:" lista={medicament}></List>
      <List titulo="Vitamin:" lista={vitamin}></List>
      <List titulo="Beauty:" lista={beauty}></List>
      {modalRequest && <Requests setModalRequest={setModalRequest}/>}
      <ToastContainer autoClose={2000}/>
    </DivStyled>
  );
};
