import { forwardRef, TextareaHTMLAttributes } from 'react';

import { TextArea } from './styles';

export const TextAreaComponent = forwardRef(
  (props: TextareaHTMLAttributes<HTMLTextAreaElement>, ref?: any) => {
    return <TextArea ref={ref} {...props} />;
  }
);
