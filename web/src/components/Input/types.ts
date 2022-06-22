import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

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
  name: string;
  control: Control<any, any>;
};

type InputStyleProperties = Pick<
  InputProps,
  'height' |
  'fontSize' | 'textColor' | 'placeholderColor' |
  'marginTop' | 'marginBottom' | 'marginRight' | 'marginLeft' | 'margin' |
  'paddingTop' | 'paddingBottom' | 'paddingRight' | 'paddingLeft' | 'padding'
>;

type ContainerStyleProperies = Pick<InputProps, 'width'>;

export interface InputElementProps {
  styles: InputStyleProperties;
}

export interface ContainerProps {
  styles: ContainerStyleProperies;
}