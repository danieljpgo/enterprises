import { ThemeProvider } from 'styled-components';
import { theme } from '../src/app/styles/themes/light';
import { GlobalStyles } from '../src/app/styles/global';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}