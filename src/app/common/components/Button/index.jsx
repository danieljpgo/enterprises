import PropTypes from 'prop-types';
import Text from '../Text';
import { Container } from './styles';

const propTypes = {
  /**
   * Text to be render inside the button.
   */
  children: PropTypes.string,
  /**
   * Specifies a name for the button.
   */
  name: PropTypes.string,
  /**
   * Specifies the type of button.
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Specifies that a button should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function for handle click event.
   */
  onClick: PropTypes.func,
};

const Button = (props) => {
  const {
    name,
    type = 'button',
    children = 'untitled',
    disabled = false,
    onClick,
  } = props;

  return (
    <Container
      name={name}
      type={type}
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
