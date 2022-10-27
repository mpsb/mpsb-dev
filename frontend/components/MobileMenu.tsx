import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { BREAKPOINTS } from "@constants/index";
import { MobileMenuProps } from "@constants/types";

const MobileMenuContainer = styled.div<MobileMenuProps>`
  top: 150px;
  right: 0%;
  position: fixed;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  width: 100%;
  transition: 0.5s ease;
  background: white;

  @media only screen and (min-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
  padding: 0;
`;

const StyledLi = styled.li`
  display: inline;
  cursor: pointer;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 24px 0px;
`;

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <StyledUl>
        <StyledLi>
          <Link href="/about">about</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/blog">blog</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/work">work</Link>
        </StyledLi>
      </StyledUl>
      <SocialLinksContainer>
        <StyledLi>
          <Link href="https://www.github.com/mpsb" target="_blank" passHref>
            <a>
              <Image
                src="/brand/github.png"
                alt="Link to Matthew's github."
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link
            href="https://www.linkedin.com/in/matthew-b-6614a811b/"
            target="_blank"
            passHref
          >
            <a>
              <Image
                src="/brand/linkedin.png"
                alt="Link to Matthew's LinkedIn."
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="https://twitter.com/_mpsb" target="_blank" passHref>
            <a>
              <Image
                src="/brand/twitter.png"
                alt="Link to Matthew's Twitter."
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
          </Link>
        </StyledLi>
      </SocialLinksContainer>
    </MobileMenuContainer>
  );
}
