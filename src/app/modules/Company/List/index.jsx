import { useLocation, useNavigate } from 'react-router';
import { useFetch } from '../../../common/utils/hooks/useFetch';
import { getShortName } from '../../../common/utils/helpers';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Card from '../../../common/components/Card';
import { Container, Content, Banner } from './styles';

const Company = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const {
    data,
    isError,
    isLoading,
  } = useFetch(`enterprises${search}`);

  function handleSeeDetails(id) {
    navigate(`${id}`);
  }

  return (
    <>
      <Container>
        {isLoading && (
          'loading'
        )}
        {isError && (
          'error'
        )}
        {!isError && !isLoading && Boolean(data.enterprises.length) && data.enterprises
          .map((enterprise) => (
            <Card key={enterprise?.id}>
              <Content onClick={() => handleSeeDetails(enterprise.id)}>
                <Banner>{getShortName(enterprise?.enterprise_name)}</Banner>
                <div>
                  <div>
                    <Title variants="aux">{enterprise?.enterprise_name}</Title>
                    <Text variants="main">{enterprise?.enterprise_type.enterprise_type_name}</Text>
                    <Text variants="main">{enterprise?.country}</Text>
                  </div>
                </div>
              </Content>
            </Card>
          ))}
      </Container>
      {!data?.enterprises?.length && (
        <Text variants="aux">Nenhuma empresa foi encontrada para a busca realizada.</Text>
      )}
    </>
  );
};

export default Company;
