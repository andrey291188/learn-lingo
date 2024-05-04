import React from "react";
import Forms, { TypeData } from "../../components/Forms/Forms";


export default function Register() {
  const registerFormData = {
    title: "Registration",
    description:
      "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information",
    buttonDesc: "Sign Up",
    fields: ["name", "email", "password"],
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
