import { forwardRef } from 'react';

import * as Styles from './styles';
import { IComponentParams } from './types';

export const SelectImageComponent = forwardRef(
  (props: IComponentParams, ref: any) => {
    if (props.thumbnailSource) {
      return (
        <Styles.Header>
          <Styles.Thumbnail thumbnailSource={props.thumbnailSource} />
          <Styles.IconTrash
            onClick={() => props.onDeleteThumbnail()}
          />
        </Styles.Header>
      );
    }

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
