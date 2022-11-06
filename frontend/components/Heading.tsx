import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { TextProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: "Arimo";
  letter-spacing: -0.045em;
  text-align: center;
  margin: 0;

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    font-size: 28px;
  }
`;

const MotionStyledHeading = motion(StyledHeading);

export default function Heading({ children }: TextProps) {
  return (
    <MotionStyledHeading
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionStyledHeading>
  );
}
