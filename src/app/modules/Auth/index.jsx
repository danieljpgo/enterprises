import { Outlet } from 'react-router';
import { Container } from './styles';

const Auth = () => (
  <Container>
    auth
    <div>
      <Outlet />
    </div>
  </Container>
);

export default Auth;
