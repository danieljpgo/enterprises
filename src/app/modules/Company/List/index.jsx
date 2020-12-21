import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { stagger, fadeInUp } from '../../../common/utils/helpers/animations';
import { useFetch } from '../../../common/utils/hooks/useFetch';
import { getShortName } from '../../../common/utils/helpers';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Card from '../../../common/components/Card';
import {
  MessageContainer,
  CardWrapper,
  Container,
  Content,
  Banner,
} from './styles';

const Company = () => {
  const [enterprises, setEnterprises] = useState();
  const { search } = useLocation();
  const navigate = useNavigate();

  const {
    data,
    isError,
    isLoading,
  } = useFetch(`enterprises${search}`);

  useEffect(() => {
    if (data) {
      setEnterprises(data?.enterprises);
    }
    if (isError?.response?.status === 401) {
      navigate('/login');
    }
  }, [data, isError]);

  function handleSeeDetails(id) {
    navigate(`${id}`);
  }

  return (
    <>
      <Container
        $isLoading={isLoading}
        variants={stagger}
        initial="hidden"
        animate={enterprises?.length && 'show'}
        exit="out"
      >
        {!isError && Boolean(enterprises?.length) && enterprises
          .map((enterprise) => (
            <CardWrapper
              key={enterprise?.id}
              variants={fadeInUp}
            >
              <Card animate>
                <Content onClick={() => handleSeeDetails(enterprise.id)}>
                  <Banner>{getShortName(enterprise?.enterprise_name)}</Banner>
                  <div>
                    <div>
                      <Title variants="aux">{enterprise?.enterprise_name}</Title>
                      <Text variants="main">{enterprise?.enterprise_type.enterprise_type_name}</Text>
                      <Text variants="submain">{enterprise?.country}</Text>
                    </div>
                  </div>
                </Content>
              </Card>
            </CardWrapper>

          ))}
      </Container>
      <MessageContainer>
        <Text variants="aux">
          {isLoading && (
            'Buscando empresas ...'
          )}
          {isError && (
            'Ocorreu um erro, favor tentar novamente'
          )}
          {enterprises?.length === 0 && !isError && !isLoading && (
            'Nenhuma empresa foi encontrada para a busca realizada'
          )}
        </Text>
      </MessageContainer>
    </>
  );
};

export default Company;
