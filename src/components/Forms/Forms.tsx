import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledFormsContainer } from "./Forms.styled";
import { IoClose } from "react-icons/io5";


export interface TypeData {
  name?: string;
  email: string;
  password: string;
}

type TwoOrThreeFields = ["email", "password"] | ["name", "email", "password"];
type AnyFieldArray = string[];

type FieldArray = TwoOrThreeFields | AnyFieldArray;

interface TypeFormData {
  title: string;
  description: string;
  buttonDesc: string;
  fields: FieldArray;
  onSubmit: SubmitHandler<TypeData>;
}

interface MyComponentProps {
  data: TypeFormData;
  toggleModal: (value: boolean) => void;
}

export default function Forms({ data, toggleModal}: MyComponentProps) {

  const { title, description, buttonDesc, fields, onSubmit: returnData } = data;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TypeData>({
    mode: "onChange",
  });

  const onSubmit = (value: TypeData) => {
    returnData(value);
    reset();
    toggleModal(false);
  };

  const handleClick = () => {
    toggleModal(false);
  }

  return (
    <StyledFormsContainer>
      <button
        className="close-button"
        onClick={handleClick}
        type="button"
      >
        <IoClose size={24} color="black" />
      </button>
      <h3>{title}</h3>
      <p>{description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((value, index) => (<div key={value}>
          <label>
            <input
              {...register(value as "email" | "password" | "name", {
                required: "Field is required",
                minLength: {
                  value: 2,
                  message: "Min length 2 letters",
                },
                maxLength: {
                  value: 36,
                  message: "Max length 36 letters",
                },
              })}
              placeholder={value}
              type={value === "password" || "email" ? value : "text"}
            />
          </label>
          <div>
            {errors?.[value as "email" | "password" | "name"]?.message && (
              <p>{`${errors?.[value as "email" | "password" | "name"]?.message}` || "Error!"}</p>
            )}
          </div>
        </div>))}
        <button type="submit" disabled={!isValid}>{buttonDesc}</button>
      </form>
    </StyledFormsContainer>
  );
}
