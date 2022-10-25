import React, { useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "@constants/index";
import { MobileMenuProps } from "@constants/types";

const MobileMenuContainer = styled.div`
  position: absolute;
`;

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return <MobileMenuContainer></MobileMenuContainer>;
}
