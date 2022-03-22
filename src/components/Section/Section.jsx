import React from "react";
import * as S from "./Section.style";

function Section({ children, background, containerColor, fullWidth }) {
  return (
    <S.Section background={background}>
      {!fullWidth && (
        <S.Container color={containerColor}>{children}</S.Container>
      )}
      {fullWidth && children}
    </S.Section>
  );
}

export default Section;
