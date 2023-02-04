import { TextField } from './styles';
import { TComponentParams } from './types';

export function TextFieldComponent({
  ...restProps
}: TComponentParams) {
  return <TextField {...restProps} />;
}
