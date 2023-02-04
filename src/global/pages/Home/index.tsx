import { Fragment } from 'react';

import { HeaderComponent } from '@components/index';
import { Container } from './styles';

export function HomePage() {
  return (
    <Fragment>
      <HeaderComponent />

      <Container>
        <h1>Hello World</h1>
      </Container>
    </Fragment>
  );
}
