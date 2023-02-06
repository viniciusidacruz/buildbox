import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '@config/routes';
import { PostsProvider } from '@global/contexts/PostsContext';

import { ResetCSS, THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <PostsProvider>
      <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
        <ResetCSS />
        <AppRoutes />
      </ThemeProvider>
    </PostsProvider>
  );
}
