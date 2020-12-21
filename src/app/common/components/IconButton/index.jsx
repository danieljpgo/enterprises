import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  /**
   * Element to be render inside the button.
   */
  children: PropTypes.node,
  /**
   * Specifies a name for the button.
   */
  name: PropTypes.string,
  /**
   * Specifies that a button should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function for handle click event.
   */
  onClick: PropTypes.func,
};

const IconButton = (props) => {
  const {
    name,
    children,
    disabled = false,
    onClick,
  } = props;

  return (
    <Container
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

IconButton.propTypes = propTypes;

export default IconButton;
