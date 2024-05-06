import { TypeData } from "./Forms";


export const registerFormData = {
    title: "Registration",
    description:
      "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information",
    buttonDesc: "Sign Up",
    fields: ["name", "email", "password"],
    onSubmit: (data: TypeData) => {
      console.log(data);
    },
  };

export const loginFormData = {
    title: "Log In",
    description:
      "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",
    buttonDesc: "Log In",
    fields: ["email", "password"],
    onSubmit: (data: TypeData) => {
      console.log(data);
    },
  };