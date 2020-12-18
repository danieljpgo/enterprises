import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  children: PropTypes.string,
  variants: PropTypes.oneOf(['base', 'aux', 'contrast']),
};

const Title = (props) => {
  const {
    children = 'untitled',
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
