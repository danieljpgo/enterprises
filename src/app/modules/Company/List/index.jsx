import { useFetch } from '../../../common/utils/hooks/useFetch';
import { getShortName } from '../../../common/utils/helpers';
import Title from '../../../common/components/Title';
import Text from '../../../common/components/Text';
import Card from '../../../common/components/Card';
import { Container, Content, Banner } from './styles';

const Company = () => {
  const {
    data,
    isError,
    isLoading,
  } = useFetch('enterprises');

  return (
    <Container>
      {isLoading && (
        'loading'
      )}
      {isError && (
        'error'
      )}
      {!isError && !isLoading && data?.enterprises?.map((enterprise) => (
        <Card key={enterprise?.id}>
          <Content>
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
  );
};

export default Company;
