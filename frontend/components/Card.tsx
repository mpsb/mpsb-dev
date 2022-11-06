import { ContainerProps } from "@constants/types";
import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
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

const MotionStyledCard = motion(StyledCard);

export default function Card({
  children,
  onClick,
  className,
}: HTMLAttributes<HTMLDivElement> & ContainerProps) {
  return (
    <MotionStyledCard
      onClick={onClick}
      className={className}
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionStyledCard>
  );
}
