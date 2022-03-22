import React from "react";
import * as S from "./InputField.style";

function InputField({
  type,
  id,
  label,
  handleChange,
  min,
  max,
  step,
  value,
  minlength,
  maxlength,
}) {
  return (
    <S.FieldControl>
      <S.Input
        id={id}
        placeholder={label}
        onChange={handleChange}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        minlength={minlength}
        maxlength={maxlength}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.FieldControl>
  );
}

export default InputField;
