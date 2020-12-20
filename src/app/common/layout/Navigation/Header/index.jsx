import { useLocation, useMatch, useNavigate } from 'react-router';
import ArrowLeft from '../../../components/icons/ArrowLeft';
import Title from '../../../components/Title';
import { Container, IconButton } from './styles';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch({ path: 'empresas/:id', caseSensitive: false, end: true });

  function handleGoBack() {
    navigate('empresas');
  }

  return (
    <Container>
      <div>
        {match?.params?.id && (
          <IconButton type="button" onClick={() => handleGoBack()}>
            <ArrowLeft />
          </IconButton>
        )}
        <div>
          <Title variants="contrast">
            {location?.state?.title}
          </Title>
        </div>
      </div>
    </Container>
  );
};

export default Header;
