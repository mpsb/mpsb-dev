import React from 'react'
import styled from 'styled-components';
import { GridProps } from '@constants/types';
import { BREAKPOINTS } from '@constants/index';

const StyledGrid = styled.div<GridProps>`
${(props) => `
display: grid;
grid-template-columns: ${props.columns};
gap: ${props.gap}px;

@media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: auto;
  }
`}
`;

export default function Grid({children, columns, gap}: GridProps) {
    const gridTemplateColumns = "1fr ".repeat(columns as number);
    return <StyledGrid columns={gridTemplateColumns as string} gap={gap}>{children}</StyledGrid>
}