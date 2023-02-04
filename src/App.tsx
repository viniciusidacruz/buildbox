import { ThemeProvider } from 'styled-components';
import { ResetCSS, THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
      <ResetCSS />
      <h1>Hello Wolrd</h1>
    </ThemeProvider>
  );
}
