import { InputHTMLAttributes } from 'react';

type InputType = 'text' | 'password' | 'email';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width: string;
  height: string;
  type: InputType;
  fontSize: string;
  textColor: string;
  placeholderColor: string;
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