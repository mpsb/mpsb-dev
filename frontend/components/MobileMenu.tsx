import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { MobileMenuProps } from "@constants/types";
import { useDetectOutsideClick } from "helpers";

const MobileMenuContainer = styled.div<MobileMenuProps>`
  top: 150px;
  position: fixed;
  width: 79%;
  transition: 0.5s ease;
  background: white;
  z-index: 6;
  border: 2px solid black;
  right: 10.5%;
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

const MotionMobileMenuContainer = motion(MobileMenuContainer);
const MotionStyledUl = motion(StyledUl);
const MotionSocialLinksContainer = motion(SocialLinksContainer);

const motionVariants = {
  visible: {
    height: 314,
  },
  invisible: {
    height: 0,
    scale: 0,
  },
};

const menuItemsMotionVariants = {
  visible: {
    scale: 1,
    transition: { delay: 0.4 },
  },
  invisible: {
    scale: 0,
  },
};

export default function MobileMenu({
  isOpen,
  handleMenuItemClick,
}: MobileMenuProps) {
  const menuContainerRef = useRef<HTMLDivElement>(null);
  useDetectOutsideClick(menuContainerRef, handleMenuItemClick, isOpen);

  return (
    <MotionMobileMenuContainer
      variants={motionVariants}
      animate={isOpen ? "visible" : "invisible"}
      transition={{ duration: 0.2 }}
      isOpen={isOpen}
      ref={menuContainerRef}
    >
      <MotionStyledUl
        variants={menuItemsMotionVariants}
        transition={{ delay: 0.2 }}
      >
        <StyledLi onClick={handleMenuItemClick}>
          <Link href="/about">about</Link>
        </StyledLi>
        <StyledLi onClick={handleMenuItemClick}>
          <Link href="/blog">blog</Link>
        </StyledLi>
        <StyledLi onClick={handleMenuItemClick}>
          <Link href="/work">work</Link>
        </StyledLi>
      </MotionStyledUl>
      <MotionSocialLinksContainer variants={menuItemsMotionVariants}>
        <StyledLi>
          <Link href="https://www.github.com/mpsb" passHref>
            <a target="_blank">
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
            passHref
          >
            <a target="_blank">
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
          <Link href="https://twitter.com/_mpsb" passHref>
            <a target="_blank">
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
      </MotionSocialLinksContainer>
    </MotionMobileMenuContainer>
  );
}
