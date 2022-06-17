import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width: string | number;
  height: string | number;
  type: string;
  fontSize: string;
  textColor: string;
  placeholderColor?: string;
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
};

type StyleProperties = Pick<
  InputProps,
  'width' | 'height' |
  'fontSize' | 'textColor' | 'placeholderColor' |
  'marginTop' | 'marginBottom' | 'marginRight' | 'marginLeft' | 'margin' |
  'paddingTop' | 'paddingBottom' | 'paddingRight' | 'paddingLeft' | 'padding'
>;

export interface InputElementProps {
  styles: StyleProperties;
}