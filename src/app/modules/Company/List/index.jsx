import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useFetch } from '../../../common/utils/hooks/useFetch';
import { getShortName } from '../../../common/utils/helpers';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Card from '../../../common/components/Card';
import {
  MessageContainer,
  Container,
  Content,
  Banner,
} from './styles';

const Company = () => {
  const [enterprises, setEnterprises] = useState([]);
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
  }, [data]);

  function handleSeeDetails(id) {
    navigate(`${id}`);
  }

  return (
    <>
      <Container $isLoading={isLoading}>
        {!isError && Boolean(enterprises.length) && enterprises
          .map((enterprise) => (
            <Card key={enterprise?.id}>
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
          {!enterprises?.length && !isError && !isLoading && (
            'Nenhuma empresa foi encontrada para a busca realizada'
          )}
        </Text>
      </MessageContainer>
    </>
  );
};

export default Company;
