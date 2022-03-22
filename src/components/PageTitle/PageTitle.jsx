import React from "react";
import * as S from "./PageTitle.style";

function PageTitle({ title, subtitle }) {
  return (
    <S.TextTitle>
      {title && <span>{title}</span>}
      {subtitle && <span>{subtitle}</span>}
      {!title && !subtitle && <span>No title and subtitle defined</span>}
    </S.TextTitle>
  );
}

export default PageTitle;
