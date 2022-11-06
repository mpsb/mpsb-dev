import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";

const StyledFlex = styled("div")<FlexProps>`
  ${(props) => `
display: flex;
flex-direction: ${props.flexDirection ? props.flexDirection : "column"};
gap: ${props.gap}px;
align-items: ${props.alignItems};
justify-content: ${props.justifyContent};
width: ${props.width};
height: ${props.height};
padding: ${props.padding ? props.padding : "0px 64px"};
margin: ${props.margin ? props.margin : "0"};

@media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
}

@media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    padding: ${props.padding ? props.padding : "0px 16px"};;
  }
`}
`;

const MotionStyledFlex = motion(StyledFlex);

export function Flex({
  className,
  flexDirection = "row",
  gap = 0,
  alignItems,
  justifyContent,
  width,
  height,
  padding,
  margin,
  children,
}: FlexProps) {
  return (
    <MotionStyledFlex
      className={className}
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionStyledFlex>
  );
}
