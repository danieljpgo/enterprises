import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getShortName } from '../../../common/utils/helpers';
import { useFetch } from '../../../common/utils/hooks/useFetch';
import Card from '../../../common/components/Card';
import Text from '../../../common/components/Text';
import { Container, Content, Banner } from './styles';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data,
    isError,
    isLoading,
  } = useFetch(`enterprises/${id}`);

  useEffect(() => {
    if (data) {
      navigate('', {
        state: {
          title: data?.enterprise?.enterprise_name || 'Nome não cadastrado',
        },
      });
    }
  }, [data]);

  return (
    <Container>
      {isLoading && (
        'loading'
      )}
      {isError && (
        'error'
      )}
      {!isError && !isLoading && data && (
        <Card>
          <Content>
            <Banner>{data && getShortName(data?.enterprise?.enterprise_name)}</Banner>
            <Text variants="base">{data?.enterprise?.description}</Text>
          </Content>
        </Card>
      )}
    </Container>
  );
};

export default Details;
