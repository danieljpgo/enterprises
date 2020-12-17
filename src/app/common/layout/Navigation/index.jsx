import { Outlet } from 'react-router';
import { Container, Main } from './styles';
import Header from './Header';

const Navigation = () => (
  <Container>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </Container>
);

export default Navigation;
