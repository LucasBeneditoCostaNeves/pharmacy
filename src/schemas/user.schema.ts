import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Mínimo 3 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=.*?[a-z])/,
      "Deve conter uma letra maiúscula"
    )
})