import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '@config/routes';

import { ResetCSS, THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
      <ResetCSS />
      <AppRoutes />
    </ThemeProvider>
  );
}
