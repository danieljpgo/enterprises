import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
};

const Card = (props) => {
  const { children } = props;

  return (
    <Container>
      {children}
    </Container>
  );
};

Card.propTypes = propTypes;

export default Card;
