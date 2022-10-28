import { MouseEventHandler, ReactNode } from "react";

export interface MobileMenuProps {
  isOpen: boolean;
}

export interface TextProps {
  textAlign?: string;
  children: ReactNode;
}

export interface ContainerProps {
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
  margin?: string;
  children: ReactNode;
}

export interface ButtonProps {
  buttonType: string;
  onClick: MouseEventHandler<HTMLElement> & Function;
  children: ReactNode;
}

export interface GridProps extends ContainerProps {
  columns: number | string;
  gap: number;
}
