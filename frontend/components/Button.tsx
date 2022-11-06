import React from "react";
import styled from "styled-components";
import { ButtonProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledButton = styled.button<ButtonProps>`
  ${(props) => `
background: ${props.buttonType === "primary" ? "black" : "white"};
color: ${props.buttonType === "primary" ? "white" : "black"};
padding: 16px 32px;
font-family: "Arimo";
font-size: 20px;
white-space: nowrap;
cursor: pointer;
transition: 0.2s ease;

:hover {
  transform: perspective(200px) translateZ(5px);
  -webkit-box-shadow: 0px 5px 5px 1px #c8c8c8;
  box-shadow: 0px 5px 5px 1px #c8c8c8;
}

@media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 16px;
}
`}
`;

export default function Button({ buttonType, onClick, children }: ButtonProps) {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
