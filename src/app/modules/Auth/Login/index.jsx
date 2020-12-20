import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Content } from './styles';
import { setLocalStorageData } from '../../../common/utils/helpers/localStorage';
import { api } from '../../../common/services/api';
import logo from '../../../common/assets/images/logo-home.png';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Form from './Form';

// @TODO baixar uma lib para lidar com diferente tamanhos de imagens
// @TODO usar useReducer

const Login = () => {
  const [isLoading, setIsLoaing] = useState(false);
  const [requestError, setRequestError] = useState('');

  const navigate = useNavigate();

  async function handleLoginSubmit(form) {
    const { email, password } = form;
    setIsLoaing(true);

    try {
      const response = await api.post('users/auth/sign_in', { email, password });
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

  function handleBlurFields() {
    setRequestError('');
  }

  return (
    <Container>
      <Content>
        <img
          src={logo}
          alt="logo da empresa Ioasys, um i e um o, seguido com ioasys"
        />
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
          <Form
            isLoading={isLoading}
            requestError={requestError}
            onSubmit={(value) => handleLoginSubmit(value)}
            onBlurFields={() => handleBlurFields()}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Login;
