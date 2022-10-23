import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Accordion from "@components/Accordion";
import { BREAKPOINTS } from "@constants";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 24px;
  margin-top: 64px;
  padding: 0px 64px;
  height: 86px;

  @media only screen and (max-width: ${BREAKPOINTS.xs}px) {
    padding: 0px 16px;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  gap: 48px;
  padding: 0;

  @media only screen and (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

const StyledLi = styled.li`
  display: inline;
  cursor: pointer;
`;

const StyledStrong = styled.strong`
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <StyledStrong>_mpsb</StyledStrong>
      </Link>
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
      </StyledUl>
      <Accordion />
    </StyledNavbar>
  );
}
