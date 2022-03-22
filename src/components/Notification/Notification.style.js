import styled from "styled-components";

export const NotificationWrapper = styled.div`
  width: 100%;
  padding: 1em 0em;
`;

export const Notification = styled.div`
  width: 100%;
  padding: 1em 2em;
  background: ${(props) =>
    props.color === "danger" ? props.theme.color.red : props.theme.color.mink};
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.black};
`;
