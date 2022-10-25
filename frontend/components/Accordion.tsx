import React, { useState } from "react";
import styled from "styled-components";
import MobileMenu from "@components/MobileMenu";
import { BREAKPOINTS } from "@constants/index";

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
  const [isAccordionMenuOpen, setIsAccordionMenuOpen] = useState(false);

  function handleAccordionClick() {
    setIsAccordionMenuOpen(!isAccordionMenuOpen);
  }

  return (
    <>
      <AccordionContainer onClick={handleAccordionClick}>
        <AccordionLine
          id="third-accordion-line"
          className={
            isAccordionMenuOpen
              ? "third-accordion-line-to-close"
              : "close-to-third-accordion-line"
          }
        />
        <AccordionLine
          id="second-accordion-line"
          className={
            isAccordionMenuOpen
              ? "middle-line-to-close"
              : "close-to-middle-line"
          }
        />
        <AccordionLine
          id="first-accordion-line"
          className={
            isAccordionMenuOpen
              ? "first-accordion-line-to-close"
              : "close-to-first-accordion-line"
          }
        />
      </AccordionContainer>
      <MobileMenu isOpen={isAccordionMenuOpen} />
    </>
  );
}
