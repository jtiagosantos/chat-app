import { InputHTMLAttributes } from 'react';
import { Control } from "react-hook-form";

export interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any, any>;
  name: string;
};