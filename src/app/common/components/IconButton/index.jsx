import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  children: PropTypes.node,
  form: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const IconButton = (props) => {
  const {
    name,
    form,
    children,
    disabled = false,
    onClick,
  } = props;

  return (
    <Container
      name={name}
      form={form}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

IconButton.propTypes = propTypes;

export default IconButton;
