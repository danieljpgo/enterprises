import { useState } from 'react';
import { Container, Content } from './styles';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Button from '../../../common/components/Button';
import logo from '../../../common/assets/images/logo-home.png';
import Input from '../../../common/components/Input';
import PasswordField from '../../../common/components/PasswordField';
import MainIcon from '../../../common/components/MailIcon';
import PasswordIcon from '../../../common/components/PasswordIcon';

// @TODO baixar uma lib para lidar com diferente tamanhos de imagens
// @TODO tamanho da logo "height"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoaing] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleLoginSubmit(emailSubmitted, passwordSubmitted) {
    setIsLoaing(true);
    console.log(emailSubmitted, passwordSubmitted);
  }

  function handleEmailChange(newEmail) {
    setEmail(newEmail);

    setIsError(true);
  }

  function handlePasswordChange(newPassword) {
    setPassword(newPassword);
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
                status={isError && 'error'}
                startAdornment={<MainIcon />}
                value={email}
                onChange={(event) => handleEmailChange(event.target.value)}
              />
              <PasswordField
                status={isError && 'error'}
                startAdornment={<PasswordIcon />}
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
              />
            </form>
            <div>
              {isError && (
                <Text variants="warning">
                  Credenciais informadas são inválidas, tente novamente.
                </Text>
              )}
            </div>
          </fieldset>

          <div>
            <Button
              type="submit"
              form="login-form"
              disabled={isLoading || !email || !password}
              onClick={() => handleLoginSubmit(email, password)}
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
