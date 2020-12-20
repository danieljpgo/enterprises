import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  children: PropTypes.node,
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
