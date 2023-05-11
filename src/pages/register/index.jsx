import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../../components/input";
import { api } from "../../service/service";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormStyled } from "./styled";
import { Header } from "../../components/header";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Mínimo 3 caracteres")
    .max(30, "Máximo 30 caracteres"),
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
  // .matches(
  //   /(?=.*?[a-z])/,
  //   "Deve conter uma letra maiúscula"
  // )
});

export const PageRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();

  const cadastrar = async (data) => {
      toast.success("Registration Done!");
      setTimeout(() => {
        navigate("/login");
      }, 1500);

  };

  return (
    <>
    <Header/>
      <FormStyled onSubmit={handleSubmit(cadastrar)}>
        <h1>Register</h1>
        <Input
          label="Name:"
          type="text"
          placeholder="Coloque seu nome aqui"
          register={register("name")}
          msgerror={errors.name?.message}
        />
        <Input
          label="Email:"
          type="text"
          placeholder="Coloque seu email aqui"
          register={register("email")}
          msgerror={errors.email?.message}
        />
        <Input
          label="Senha:"
          type="text"
          placeholder="Coloque sua senha aqui"
          register={register("password")}
          msgerror={errors.password?.message}
        />
        <button type="submit">Cadastrar</button>
        <Link to="/login">Já possui um conta?</Link>
      </FormStyled>
      <ToastContainer autoClose={1400} />
    </>
  );
};
