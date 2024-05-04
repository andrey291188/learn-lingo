import React from 'react'
import Forms, { TypeData } from '../../components/Forms/Forms';

export default function Login() {
  const registerFormData = {
    title: "Log In",
    description:
      "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",
    buttonDesc: "Log In",
    fields: ["email", "password"],
    onSubmit: (data: TypeData) => {
      console.log(data);
    },
  };

  return (
    <>
      <Forms data={registerFormData}/>
    </>
  );
}
