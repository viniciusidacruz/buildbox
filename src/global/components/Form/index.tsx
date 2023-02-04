import { ButtonComponent } from '@components/index';

import * as Styles from './styles';

export function FormComponent() {
  return (
    <Styles.Form>
      <Styles.Footer>
        <ButtonComponent title="Descartar" variant="outline" />
        <ButtonComponent title="Publicar" variant="contained" />
      </Styles.Footer>
    </Styles.Form>
  );
}
