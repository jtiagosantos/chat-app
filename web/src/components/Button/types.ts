import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';

export type ButtonProps = 
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    width: string;
    height: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    margin?: string;
    loading?: boolean;
    icon?: ReactElement;
  }

export type StyleProperties = Pick<
  ButtonProps,
  'width' | 'height' |
  'margin' | 'marginTop' | 'marginBottom' | 'marginRight' | 'marginLeft' | 
  'icon'
>;

export interface ContainerProps {
  styles: StyleProperties;
}