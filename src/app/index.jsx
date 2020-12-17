import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/light';
import { GlobalStyles } from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>teste</div>
  </ThemeProvider>
);

export default App;
