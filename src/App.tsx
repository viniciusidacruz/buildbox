import { ThemeProvider } from 'styled-components';

import { HomePage } from '@pages/index';

import { ResetCSS, THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
      <ResetCSS />
      <HomePage />
    </ThemeProvider>
  );
}
