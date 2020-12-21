import { useLocation, useMatch, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import SearchIcon from '../../../components/icons/SearchIcon';
import IconButton from '../../../components/IconButton';
import logoNav from '../../../assets/images/logo-nav.png';
import Details from './Details';
import Search from './Search';
import { Container, Content } from './styles';
import { fadeInOut } from '../../../utils/helpers/animations';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const enterpriseDetails = useMatch({ path: 'empresas/:id', caseSensitive: false, end: true });
  const enterpriseList = useMatch({ path: 'empresas', caseSensitive: false, end: true });

  function handleNavigateTo(path) {
    navigate(path);
  }

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
            <motion.img
              variants={fadeInOut}
              initial="hidden"
              animate="show"
              exit="out"
              src={logoNav}
              alt="logo da empresa Ioasys, um i e um o, seguido com ioasys"
            />
          </div>
          <IconButton type="button" onClick={() => handleNavigateTo('empresas')}>
            <SearchIcon />
          </IconButton>
        </Content>
      )}

    </Container>
  );
};

export default Header;
