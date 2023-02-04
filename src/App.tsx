import { ThemeProvider } from 'styled-components';
import { THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
      <h1>Hello Wolrd</h1>
    </ThemeProvider>
  );
}
