import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 24px;
  margin-top: 64px;
  padding: 0px 64px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: inline-flex;
  gap: 48px;
  padding: 0;
`;

const StyledLi = styled.li`
  display: inline;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <b>_mpsb</b>
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
          <Link href="/about" target="_blank">
            about
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/blog" target="_blank">
            blog
          </Link>
        </StyledLi>
        <StyledLi>
          <Link href="/work" target="_blank">
            work
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNavbar>
  );
}
