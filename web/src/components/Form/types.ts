import { FormHTMLAttributes, PropsWithChildren } from 'react';

interface Props {
  width: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  margin?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  padding?: string;
}

export type FormProps = 
  PropsWithChildren<FormHTMLAttributes<HTMLFormElement> & Props>;

export interface ContainerProps {
  styles: Props
}