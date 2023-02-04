import { InputHTMLAttributes } from 'react';

export interface IComponentParams
  extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
}
