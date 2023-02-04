import { forwardRef, InputHTMLAttributes, RefObject } from 'react';
import { TextField } from './styles';

export const TextFieldComponent = forwardRef(
  (props: InputHTMLAttributes<HTMLInputElement>, ref?: any) => {
    return <TextField ref={ref} {...props} />;
  }
);
