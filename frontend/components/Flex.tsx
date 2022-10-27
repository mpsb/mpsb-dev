import React from "react";
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
padding: ${props.padding ? props.padding : "0px 64px"};

@media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column;
}

@media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    padding: ${props.padding ? props.padding : "0px 16px"};;
  }
`}
`;

export function Flex({
  className,
  flexDirection = "row",
  gap = 0,
  alignItems,
  justifyContent,
  width,
  padding,
  children,
}: FlexProps) {
  return (
    <StyledFlex
      className={className}
      flexDirection={flexDirection}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      padding={padding}
    >
      {children}
    </StyledFlex>
  );
}
