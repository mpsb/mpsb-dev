import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "@constants";

const AccordionContainer = styled.button`
  display: none;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  transform: scale(-1, -1);
  transition: 0.2s ease;
  border: none;
  background-color: transparent;
  padding: 0;

  @media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    display: flex;
  }

  :hover > #second-accordion-line {
    width: 24px;
  }

  :hover > #third-accordion-line {
    width: 16px;
  }

  :hover {
    opacity: 0.7;
  }
`;

const AccordionLine = styled.div`
  height: 4px;
  width: 32px;
  background-color: black;
  transition: 0.2s ease;
`;

export default function Accordion() {
  function handleAccordionClick() {}

  return (
    <AccordionContainer onClick={handleAccordionClick}>
      <AccordionLine />
      <AccordionLine id="second-accordion-line" />
      <AccordionLine id="third-accordion-line" />
    </AccordionContainer>
  );
}
