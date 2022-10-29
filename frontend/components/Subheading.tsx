import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledSubheading = styled.h2<TextProps>`
  ${(props) => `
font-size: 24px;
  font-weight: 400;
  font-family: "Quicksand";
  margin: 0;
  text-align: ${props.textAlign ? props.textAlign : ""};

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 16px;
  }
`}
`;

const MotionStyledSubheading = motion(StyledSubheading);

export default function Subheading({ children, textAlign }: TextProps) {
  return (
    <MotionStyledSubheading
      textAlign={textAlign}
      style={{ opacity: 0, translateX: -10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionStyledSubheading>
  );
}
