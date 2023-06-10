import React from "react";
import { InputStyled } from "./style";

export const Input = ({ label, type, placeholder, register }) => {
  return (
    <InputStyled>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
    </InputStyled>
  );
};
