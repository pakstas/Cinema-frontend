import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, type, bold }) {
  return (
    <S.Button type={type} onClick={handleClick} color={color}>
      {bold ? <strong>{children}</strong> : children}
    </S.Button>
  );
}

export default Button;
