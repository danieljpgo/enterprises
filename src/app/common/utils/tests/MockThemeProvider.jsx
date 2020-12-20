import { ThemeProvider } from 'styled-components';
import PropsTypes from 'prop-types';
import { theme } from '../../../styles/themes/light';

const propTypes = {
  children: PropsTypes.node,
};

const MockThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

MockThemeProvider.propTypes = propTypes;

export default MockThemeProvider;
