import styled from "styled-components";

export const FieldControl = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => props.theme.color.tint.white30};
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out;
  &&:hover {
    background-color: ${(props) => props.theme.color.tint.white45};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
  // Effects of div and elements inside it when input is focused.
  &&:focus-within {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    && label {
      top: 4px;
      opacity: 1;
      color: ${(props) => props.theme.color.black};
    }
    && input {
      padding: 24px 16px 8px 16px;
      ::placeholder {
        opacity: 0;
      }
    }
  }
  && input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: ${(props) => props.theme.color.black};
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
`;

export const Label = styled.label`
  box-sizing: border-box;
  position: absolute;
  top: 24px;
  left: 16px;
  font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: ${(props) => props.theme.color.white};
  opacity: 0;
  pointer-events: none;
  transition: 0.1s all ease-in-out;
`;
