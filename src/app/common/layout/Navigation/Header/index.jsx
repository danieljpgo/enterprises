import { useLocation, useMatch, useNavigate } from 'react-router';
import { Container } from './styles';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch({ path: 'empresas/:id', caseSensitive: false, end: true });

  function handleGoBack() {
    navigate('empresas');
  }

  return (
    <Container>
      {match?.params?.id && (
        <button type="button" onClick={() => handleGoBack()}>
          a
        </button>
      )}
      {location?.state?.title}
    </Container>
  );
};

export default Header;
