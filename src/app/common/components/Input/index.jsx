import PropTypes from 'prop-types';
import {
  Container, Error, Status, Slot,
} from './styles';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'datetime-local', 'search', 'tel', 'time']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  status: PropTypes.oneOf(['error']),
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

const Input = (props) => {
  const {
    id,
    name,
    status,
    type = 'text',
    value,
    startAdornment,
    endAdornment,
    onChange,
  } = props;

  return (
    <Container $status={status}>
      <Slot>
        {startAdornment}
      </Slot>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Slot>
        {endAdornment}
      </Slot>
      {status && (
        <Status>
          {status === 'error' && <Error>!</Error>}
        </Status>
      )}
    </Container>
  );
};

Input.propTypes = propTypes;

export default Input;
