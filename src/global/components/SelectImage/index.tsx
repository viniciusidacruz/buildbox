import { forwardRef, InputHTMLAttributes } from 'react';

import * as Styles from './styles';

export const SelectImageComponent = forwardRef(
  (props: InputHTMLAttributes<HTMLInputElement>, ref: any) => {
    return (
      <Styles.SelectImage htmlFor="thumbnail">
        <Styles.Icon />
        <Styles.Input
          type="file"
          accept="image/*"
          ref={ref}
          {...props}
        />
      </Styles.SelectImage>
    );
  }
);
