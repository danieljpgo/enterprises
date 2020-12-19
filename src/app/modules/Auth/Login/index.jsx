import { Container, Content } from './styles';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Button from '../../../common/components/Button';
import logo from '../../../common/assets/images/logo-home.png';

// @TODO baixar uma lib para lidar com diferente tamanhos de imagens
// @TODO tamanho da logo "height"

const Login = () => (
  <Container>
    <Content>
      <img src={logo} alt="logo da empresa Ioasys, um i e um o, seguido com ioasys" />
      <div>
        <div>
          <Title variants="base">
            BEM-VINDO AO EMPRESAS
          </Title>
        </div>
        <div>
          <Text variants="sub">
            Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
          </Text>
        </div>
        <fieldset>
          <input />
          <input />
        </fieldset>
        <div>
          <Button onClick={() => console.log('test')}>Entrar</Button>
        </div>
      </div>
    </Content>
  </Container>
);

export default Login;
