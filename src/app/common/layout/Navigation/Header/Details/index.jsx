import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import ArrowLeft from '../../../../components/icons/ArrowLeft';
import Title from '../../../../components/Title';
import IconButton from '../../../../components/IconButton';
import Skeleton from '../../../../components/Skeleton';
import { Container, SkeletonWrapper } from './styles';

const propTypes = {
  title: PropTypes.string,
};

const Details = (props) => {
  const { title } = props;

  const navigate = useNavigate();

  function handleGoBack() {
    navigate('empresas');
  }

  return (
    <Container>
      <IconButton type="button" onClick={() => handleGoBack()}>
        <ArrowLeft />
      </IconButton>
      <div>
        {title
          ? (
            <Title variants="contrast">
              {title}
            </Title>
          )
          : (
            <SkeletonWrapper>
              <Skeleton width="200px" height="26px" />
            </SkeletonWrapper>
          )}
      </div>
    </Container>
  );
};

Details.propTypes = propTypes;

export default Details;
