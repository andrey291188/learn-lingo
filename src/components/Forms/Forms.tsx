import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledFormsContainer } from "./Forms.styled";

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
}

export default function Forms({ data }: MyComponentProps) {
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
  };

  return (
    <StyledFormsContainer>
      <h3>{title}</h3>
      <p>{description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((value, index) => (<React.Fragment key={value}>
          <label>
            <input
              {...register(value as "email" | "password" | "name", {
                required: "Field is required",
                minLength: {
                  value: 2,
                  message: "Min length 2 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Max length 15 letters",
                },
              })}
              placeholder={value}
            />
          </label>
          <div>
            {errors?.[value as "email" | "password" | "name"]?.message && (
              <p>{`${errors?.[value as "email" | "password" | "name"]?.message}` || "Error!"}</p>
            )}
          </div>
        </React.Fragment>))}
        <button type="submit" disabled={!isValid}>{buttonDesc}</button>
      </form>
    </StyledFormsContainer>
  );
}
