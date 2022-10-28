import React from "react";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledDisplay = styled.h1`
  font-size: 96px;
  letter-spacing: -0.045em;
  margin: 0;

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 48px;
  }
`;

export default function Display({ children }: TextProps) {
  return <StyledDisplay>{children}</StyledDisplay>;
}
