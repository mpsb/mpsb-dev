import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledBody = styled.span<TextProps>`
  ${(props) => `
font-size: 20px;
  font-weight: 400;
  font-family: "Quicksand";
  margin: 16px 0px;
  text-align: ${props.textAlign ? props.textAlign : ""};

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 16px;
  }
`}
`;

const MotionStyledBody = motion(StyledBody);

export default function Body({ children, textAlign }: TextProps) {
  return (
    <MotionStyledBody
      textAlign={textAlign}
      style={{ opacity: 0, translateX: -10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionStyledBody>
  );
}
