import PropTypes from 'prop-types';
import Text from '../Text';
import { Container } from './styles';

const propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const Button = (props) => {
  const {
    children = 'untitled',
    disabled = false,
    onClick,
  } = props;

  return (
    <Container
      disabled={disabled}
      onClick={onClick}
    >
      <Text variants="contrast">
        {children}
      </Text>
    </Container>
  );
};

Button.propTypes = propTypes;

export default Button;
