import React from "react";
import * as S from "./Notification.style";

function Notification({ message, color }) {
  return (
    <S.NotificationWrapper>
      <S.Notification color={color}>{message}</S.Notification>
    </S.NotificationWrapper>
  );
}

export default Notification;
