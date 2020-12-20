import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import { theme } from './styles/themes/light';
import { GlobalStyles } from './styles/global';
import Routers from './routers';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SWRConfig value={{
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      shouldRetryOnError: true,
      refreshInterval: 0,
      errorRetryInterval: 5000,
      errorRetryCount: 3,
    }}
    >
      <Routers />
    </SWRConfig>
  </ThemeProvider>
);

export default App;
