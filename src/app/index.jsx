import { theme } from '../app/styles/themes/light';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>teste</div>
  </ThemeProvider>
);

export default App;
