import PropTypes from 'prop-types';
import { Container, boxShadowBase, boxShadowHover } from './styles';

const propTypes = {
  /**
   * Specifies the card has animation.
   */
  animate: PropTypes.bool,
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
};

const Card = (props) => {
  const {
    animate = false,
    children,
  } = props;

  return (
    <Container
      layout
      initial={{
        boxShadow: boxShadowBase,
      }}
      whileHover={animate && {
        scale: 1.05,
        boxShadow: boxShadowHover,
      }}
      whileTap={animate && {
        scale: 1,
        boxShadow: boxShadowBase,
      }}
    >
      {children}
    </Container>
  );
};

Card.propTypes = propTypes;

export default Card;
