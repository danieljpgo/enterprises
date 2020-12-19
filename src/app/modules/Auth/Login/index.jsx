import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Content } from './styles';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Button from '../../../common/components/Button';
import logo from '../../../common/assets/images/logo-home.png';
import Input from '../../../common/components/Input';
import PasswordField from '../../../common/components/PasswordField';
import MainIcon from '../../../common/components/icons/MailIcon';
import PasswordIcon from '../../../common/components/icons/PasswordIcon';
import { api } from '../../../common/services/api';
import { setLocalStorageData } from '../../../common/utils/helpers/localStorage';

// @TODO baixar uma lib para lidar com diferente tamanhos de imagens
// @TODO mensagens de error

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoaing] = useState(false);
  const [requestError, setRequestError] = useState('');

  const navigate = useNavigate();

  async function handleLoginSubmit(emailSubmitted, passwordSubmitted) {
    setIsLoaing(true);
    try {
      const response = await api.post('users/auth/sign_in', {
        email: emailSubmitted,
        password: passwordSubmitted,
      });
      setIsLoaing(false);

      if (response?.data?.success) {
        setLocalStorageData('headers', response.headers);
        navigate('/');
      } else {
        setRequestError('Falha ao realizar o login, tentar novamente mais tarde.');
      }
    } catch (error) {
      setIsLoaing(false);

      const { status } = error.response;
      if (status === 401) {
        setRequestError('Credenciais de login inválidas. Por favor, tente novamente.');
      } else {
        setRequestError('Falha ao realizar o login, tentar novamente mais tarde.');
      }
    }
  }

  function handleEmailChange(newEmail) {
    setEmail(newEmail);
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
                status={requestError && 'error'}
                startAdornment={<MainIcon />}
                value={email}
                onChange={(event) => handleEmailChange(event.target.value)}
              />
              <PasswordField
                status={requestError && 'error'}
                startAdornment={<PasswordIcon />}
                value={password}
                onChange={(event) => handlePasswordChange(event.target.value)}
              />
            </form>
            <div>
              {requestError && (
                <Text variants="warning">
                  {requestError}
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
