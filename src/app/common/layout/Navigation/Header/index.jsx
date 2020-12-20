import { useLocation, useMatch } from 'react-router';
import SearchIcon from '../../../components/icons/SearchIcon';
import IconButton from '../../../components/IconButton';
import logoNav from '../../../assets/images/logo-nav.png';
import Details from './Details';
import { Container, Content } from './styles';

const Header = () => {
  const location = useLocation();
  const detailsPage = useMatch({ path: 'empresas/:id', caseSensitive: false, end: true });

  return (
    <Container>
      {detailsPage && (
        <Details title={location?.state?.title} />
      )}
      {!detailsPage && (
        <Content>
          <div>
            <img
              src={logoNav}
              alt="logo da empresa Ioasys, um i e um o, seguido com ioasys"
            />
          </div>
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Content>
      )}

    </Container>
  );
};

export default Header;
