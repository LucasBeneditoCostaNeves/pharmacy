//Importanto createContext e useState, já vem com o react
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import img13 from "../assets/img13.webp";
import img14 from "../assets/img14.webp";
import img15 from "../assets/img15.webp";
import img16 from "../assets/img16.webp";
import img17 from "../assets/img17.webp";
import img18 from "../assets/img18.webp";
import img19 from "../assets/img19.webp";
import img20 from "../assets/img20.webp";
import img21 from "../assets/img21.webp";
import img22 from "../assets/img22.webp";
import img23 from "../assets/img23.webp";

//Criando nosso contexto
export const CreateContextApplication = createContext({});

//Função que vai englobar nosso contexto
export const GericoProvider = ({ children }) => {
  //Aqui vamos salvar os dados da Requisição que vai vefiricar se o Token é válido
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [requestDataState, setRequestDataState] = useState([]);
  const token = localStorage.getItem("@Token");

  const fullData = [
    {
      img: img,
      name: "Vitasay",
      price: 20,
      category: "medicament",
    },
    {
      img: img2,
      name: "Doril",
      price: 13,
      category: "medicament",
    },
    {
      img: img3,
      name: "Epocler",
      price: 16,
      category: "medicament",
    },
    {
      img: img4,
      name: "Engov",
      price: 11,
      category: "medicament",
    },
    {
      img: img5,
      name: "Dipirona",
      price: 9,
      category: "medicament",
    },
    {
      img: img6,
      name: "Neosaldina Dipirona",
      price: 16,
      category: "medicament",
    },
    {
      img: img7,
      name: "Ibuprofeno",
      price: 20,
      category: "medicament",
    },
    {
      img: img9,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img10,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img11,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img12,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img13,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img14,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img15,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img16,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img17,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img18,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img19,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img20,
      name: "xxx",
      price: 20,
      category: "beauty",
    },
    {
      img: img21,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img22,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
    {
      img: img23,
      name: "xxx",
      price: 20,
      category: "vitamin",
    },
  ];

  async function autoLogin() {
    //Token salvo no LocalStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token não acontece nada
    if (!token) {
      return null;
    } else {
      navigate("/profile");
    }
  }

  async function protejerRotas() {
    //Buscando o token salvo no localStorage
    const token = localStorage.getItem("@Token");

    //Se não existir token vamos enviar o Usuário para o Login
    if (!token) {
      navigate("/");
    }
  }

  async function inserindoDados() {
    setData(fullData);
  }
  useEffect(() => {
    inserindoDados();
  }, []);

  async function requestData(item) {
    console.log(item);
    setRequestDataState([...requestDataState, item]);
  }

  return (
    /*Chamamos nosso contexto com ".Provider" e passamos pro "value" 
        oq queremos exportar daqui*/
    <CreateContextApplication.Provider
      value={{
        autoLogin,
        protejerRotas,
        inserindoDados,
        data,
        requestDataState,
        requestData,
        fullData,
      }}
    >
      {children}
    </CreateContextApplication.Provider>
  );
};
