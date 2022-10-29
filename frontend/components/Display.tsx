import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledDisplay = styled.h1`
  font-size: 96px;
  letter-spacing: -0.045em;
  margin: 0;

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 56px;
  }
`;

const MotionStyledDisplay = motion(StyledDisplay);

export default function Display({ children }: TextProps) {
  return (
    <MotionStyledDisplay
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionStyledDisplay>
  );
}
