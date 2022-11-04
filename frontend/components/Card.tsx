import { ContainerProps } from "@constants/types";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 2px solid black;
  padding: 24px;
  cursor: pointer;
  transition: 0.2s ease;
  background: white;

  :hover {
    transform: perspective(200px) translateZ(5px);
    -webkit-box-shadow: 0px 5px 5px 1px #c8c8c8;
    box-shadow: 0px 5px 5px 1px #c8c8c8;
  }
`;

export default function Card({
  children,
  onClick,
  className,
}: HTMLAttributes<HTMLDivElement> & ContainerProps) {
  return (
    <StyledCard onClick={onClick} className={className}>
      {children}
    </StyledCard>
  );
}
