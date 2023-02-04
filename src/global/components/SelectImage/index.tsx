import { forwardRef } from 'react';

import * as Styles from './styles';
import { IComponentParams } from './types';

export const SelectImageComponent = forwardRef(
  (props: IComponentParams, ref: any) => {
    return (
      <Styles.SelectImage htmlFor={props.htmlFor}>
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
