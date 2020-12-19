import PropTypes from 'prop-types';
import { Container } from './styles';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'datetime-local', 'search', 'tel', 'time']),
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
};

const Input = (props) => {
  const {
    id,
    name,
    type = 'text',
    startAdornment,
    endAdornment,
  } = props;

  return (
    <Container>
      {startAdornment}
      <input
        id={id}
        name={name}
        type={type}
      />
      {endAdornment}
    </Container>
  );
};

Input.propTypes = propTypes;

export default Input;
