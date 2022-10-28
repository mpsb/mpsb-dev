import React from "react";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Quicksand";
  text-align: center;
  margin: 0;

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 32px;
  }
`;

export default function Heading({ children }: TextProps) {
  return <StyledHeading>{children}</StyledHeading>;
}
