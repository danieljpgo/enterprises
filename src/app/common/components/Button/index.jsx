import PropTypes from 'prop-types';
import Text from '../Text';
import { Container } from './styles';

const propTypes = {
  children: PropTypes.string,
  form: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const Button = (props) => {
  const {
    name,
    form,
    type = 'button',
    children = 'untitled',
    disabled = false,
    onClick,
  } = props;

  return (
    <Container
      name={name}
      type={type}
      form={form}
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
