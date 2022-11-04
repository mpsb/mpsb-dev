import React from "react";
import styled from "styled-components";
import { GridProps } from "@constants/types";
import { BREAKPOINTS } from "@constants/index";
import { processInputAreas } from "@helpers";

const StyledGrid = styled.div<GridProps>`
  ${(props) => `
display: grid;
grid-template-columns: ${props.columns};
gap: ${props.gap}px;
grid-template-areas:
  ${props.areas};

${props.gridAreaClasses}

@media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: auto;
    grid-template-areas:
    ${props.responsiveGridTemplateAreas}
    ;
`}
`;

export default function Grid({ children, columns, gap, areas }: GridProps) {
  const gridTemplateColumns = "1fr ".repeat(columns as number);
  const {gridAreaClasses, responsiveGridTemplateAreas} = processInputAreas(areas);
  
  return (
    <StyledGrid columns={gridTemplateColumns as string} gap={gap} areas={areas} gridAreaClasses={gridAreaClasses} responsiveGridTemplateAreas={responsiveGridTemplateAreas}>
      {children}
    </StyledGrid>
  );
}
