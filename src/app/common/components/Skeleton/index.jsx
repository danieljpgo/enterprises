import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  /**
   * Specifies the height for the component. `px or %`
   */
  height: PropTypes.string,
  /**
   * Specifies the width for the component. `px or %`
   */
  width: PropTypes.string,
};

const Skeleton = (props) => {
  const {
    height = '100%',
    width = '100%',
  } = props;

  return (
    <Container
      $height={height}
      $width={width}
    >
      <div />
    </Container>
  );
};

Skeleton.propTypes = propTypes;

export default Skeleton;
