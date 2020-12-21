import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
  /**
   * Specifies the variants of title.
   */
  variants: PropTypes.oneOf(['base', 'aux', 'contrast']),
};

const Title = (props) => {
  const {
    children,
    variants = 'base',
  } = props;

  return (
    <Container $variants={variants}>
      {children}
    </Container>
  );
};

Title.propTypes = propTypes;

export default Title;
