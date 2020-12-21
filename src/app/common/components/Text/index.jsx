import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
  /**
   * Specifies the variants of text.
   */
  variants: PropTypes.oneOf(['main', 'submain', 'base', 'sub', 'aux', 'warning', 'contrast']),
};

const Text = (props) => {
  const {
    children,
    variants = 'main',
  } = props;

  return (
    <Container $variants={variants}>
      {children}
    </Container>
  );
};

Text.propTypes = propTypes;

export default Text;
