import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/light';
import { GlobalStyles } from './styles/global';
import Routers from './routers';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routers />
  </ThemeProvider>
);

export default App;
