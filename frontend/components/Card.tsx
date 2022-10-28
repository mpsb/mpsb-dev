import { ContainerProps } from '@constants/types';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 2px solid black;
    padding: 24px;
    cursor: pointer;
    transition: 0.2s ease;

    :hover {
        transform: perspective(200px) translateZ(5px);
        -webkit-box-shadow: 0px 5px 5px 1px #C8C8C8; 
box-shadow: 0px 5px 5px 1px #C8C8C8;
    }
`;


export default function Card({children}: ContainerProps) {
    return <StyledCard>
        {children}
    </StyledCard>
}