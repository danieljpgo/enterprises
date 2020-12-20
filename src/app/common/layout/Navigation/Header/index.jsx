import { useLocation, useMatch } from 'react-router';
import SearchIcon from '../../../components/icons/SearchIcon';
import IconButton from '../../../components/IconButton';
import logoNav from '../../../assets/images/logo-nav.png';
import Details from './Details';
import Search from './Search';
import { Container, Content } from './styles';

const Header = () => {
  const location = useLocation();
  const enterpriseDetails = useMatch({ path: 'empresas/:id', caseSensitive: false, end: true });
  const enterpriseList = useMatch({ path: 'empresas', caseSensitive: false, end: true });

  return (
    <Container>
      {enterpriseDetails && (
        <Details title={location?.state?.title} />
      )}
      {enterpriseList && (
        <Search />
      )}
      {!enterpriseDetails && !enterpriseList && (
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
