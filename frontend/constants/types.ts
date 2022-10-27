import { ReactNode } from "react";

export interface MobileMenuProps {
  isOpen: boolean;
}

export interface TextProps {
  children: ReactNode;
}

export interface FlexProps {
  className?: string;
  flexDirection?: string;
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  padding?: string;
  children: ReactNode;
}
