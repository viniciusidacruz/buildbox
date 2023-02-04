import {
  ButtonComponent,
  SelectImageComponent,
} from '@components/index';

import * as Styles from './styles';

export function FormComponent() {
  return (
    <Styles.Form>
      <Styles.Header>
        <SelectImageComponent
          id="thumbnail"
          name="thumbnail"
          htmlFor="thumbnail"
        />
      </Styles.Header>

      <Styles.Footer>
        <ButtonComponent title="Descartar" variant="outline" />
        <ButtonComponent title="Publicar" variant="contained" />
      </Styles.Footer>
    </Styles.Form>
  );
}
