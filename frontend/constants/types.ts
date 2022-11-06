import { MouseEventHandler, ReactNode } from "react";

export interface MobileMenuProps {
  isOpen: boolean;
  handleMenuItemClick?: () => void;
}

export interface TextProps {
  textAlign?: string;
  children: ReactNode;
}

export interface ContainerProps {
  children: ReactNode;
  onClick?: () => void;
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
  areas?: string;
  gridAreaClasses?: string;
  responsiveGridTemplateAreas?: string;
}

export type Article = {
  id: number;
  attributes: {
    blocks: Array<ArticleBlock>;
    createdAt: string;
    description: string;
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
    createdDate: string;
  };
};

export type ArticleBlock = {
  id: number;
  body: string;
};

export type ArticleMeta = {
  pagination: Object;
};

export type allArticles = {
  data: Array<Article>;
  meta: Array<ArticleMeta>;
};

export type BlogParams = {
  slug: string;
  id: number;
};
