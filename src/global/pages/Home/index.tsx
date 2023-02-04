import { Fragment } from 'react';

import { HeaderComponent, FormComponent } from '@components/index';

import { Container } from './styles';

export function HomePage() {
  return (
    <Fragment>
      <HeaderComponent />

      <Container>
        <FormComponent />
      </Container>
    </Fragment>
  );
}
