import * as Styles from './styles';
import { IComponentParams } from './types';

export function SelectImageComponent({
  htmlFor,
  ...restProps
}: IComponentParams) {
  return (
    <Styles.SelectImage htmlFor={htmlFor}>
      <Styles.Icon />
      <Styles.Input type="file" accept="image/*" {...restProps} />
    </Styles.SelectImage>
  );
}
