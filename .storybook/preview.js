import { ThemeProvider } from 'styled-components';
import { theme } from '../src/app/styles/themes/light';
import { GlobalStylesForStorybook } from '../src/app/styles/global';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStylesForStorybook />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}