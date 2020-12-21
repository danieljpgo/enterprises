import { Container } from './styles';
import Text from '../../common/components/Text';
import { fadeInOut } from '../../common/utils/helpers/animations';

const Home = () => (
  <Container
    variants={fadeInOut}
    initial="hidden"
    animate="show"
    exit="out"
  >
    <Text variants="sub">Clique na busca para iniciar.</Text>
  </Container>
);

export default Home;
