import { Container, Content } from './styles';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Button from '../../../common/components/Button';
import logo from '../../../common/assets/images/logo-home.png';
import Input from '../../../common/components/Input';
import PasswordField from '../../../common/components/PasswordField';

// @TODO baixar uma lib para lidar com diferente tamanhos de imagens
// @TODO tamanho da logo "height"

const Login = () => {
  function handleLoginSubmit() {
  }

  return (
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
            <form id="login-form">
              <Input
                id="email"
                name="email"
                type="email"
                status="error"
                startAdornment={<div>a</div>}
              />
              <PasswordField
                status="error"
                startAdornment={<div>a</div>}
              />
            </form>
            <Text variants="warning">
              Credenciais informadas são inválidas, tente novamente.
            </Text>
          </fieldset>

          <div>
            <Button
              type="submit"
              form="login-form"
              onClick={() => handleLoginSubmit()}
            >
              Entrar
            </Button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Login;
