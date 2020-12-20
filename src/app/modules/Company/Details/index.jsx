import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getShortName } from '../../../common/utils/helpers';
import { useFetch } from '../../../common/utils/hooks/useFetch';
import Card from '../../../common/components/Card';
import Skeleton from '../../../common/components/Skeleton';
import Text from '../../../common/components/Text';
import { MessageContainer } from '../List/styles';
import {
  LoadingContent,
  Container,
  Content,
  Banner,
} from './styles';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data,
    isError,
  } = useFetch(`enterprises/${id}`);

  useEffect(() => {
    if (data) {
      navigate('', {
        state: {
          title: data?.enterprise?.enterprise_name || 'Nome não cadastrado',
        },
      });
    }
    if (isError) {
      navigate('', {
        state: {
          title: data?.enterprise?.enterprise_name || 'Error ao buscar a empresa',
        },
      });
    }
  }, [data, isError]);

  return (
    <Container>
      {isError && (
        <MessageContainer>
          <Text variants="aux">Empresa não encontrada, favor buscar novamente a empresa na página anterior.</Text>
        </MessageContainer>
      )}
      {!isError && (
        <Card>
          <Content>
            {data
              ? (
                <Banner>{data && getShortName(data?.enterprise?.enterprise_name)}</Banner>)
              : <Skeleton height="240px" />}
            {data
              ? <Text variants="base">{data?.enterprise?.description}</Text>
              : (
                <LoadingContent>
                  <Skeleton height="26px" />
                  <Skeleton height="26px" />
                  <Skeleton height="26px" />
                </LoadingContent>
              )}
          </Content>
        </Card>
      )}
    </Container>
  );
};

export default Details;
