import { set, useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { api } from "../../service/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { CreateContextApplication } from "../../context/fullcontext";
import { BodyStyled, DivStyled, FormStyled } from "./styled";
import { Header } from "../../components/header";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido")
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 120 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .max(120, "Máximo 120 caracteres"),
});

export const PageLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    toast.success("Login Concluído!💊");
    setTimeout(() => {
      navigate("/");
    }, 1600);
  };
  useEffect(() => {
    setModal(true);
  }, []);
  return (
    <>
      <Header setModal={setModal} cadastro="Cadastro" />
      <BodyStyled>
        <div className="flex">
          <h2>Venha ser Nosso </h2>
          <h2 className="red">Cliente</h2>
        </div>
        <div className="flex">
          <h2>para receber as</h2>
        </div>
        <div className="flex">
          <h3 className="red">melhores promoções</h3>
        </div>
      </BodyStyled>
      {modal && (
        <DivStyled className="divExt">
          <FormStyled
            className="animate__animated animate__fadeInDown"
            onSubmit={handleSubmit(login)}
          >
            <div className="top-form">
              <h1>Login</h1>
              <span className="x" onClick={() => setModal(false)}>
                X
              </span>
            </div>
            <Input
              label="Email"
              type="text"
              placeholder="Your email here"
              register={register("email")}
              msgerror={errors.email?.message && "Required Email"}
            />
            <Input
              label="Senha"
              type="text"
              placeholder="Your password here"
              register={register("password")}
              msgerror={errors.password?.message && "Required Password"}
            />
            <button type="submit">Login</button>
            <Link className="link" to="/register">
              Don't have an account yet?
            </Link>
          </FormStyled>
        </DivStyled>
      )}
      <ToastContainer autoClose={1500} />
    </>
  );
};
