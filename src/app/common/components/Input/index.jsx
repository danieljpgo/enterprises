import PropTypes from 'prop-types';
import {
  Container,
  Error,
  Status,
  Slot,
} from './styles';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.oneOf(['error', false]),
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'datetime-local', 'search', 'tel', 'time']),
  placeholder: PropTypes.string,
  contrast: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

const Input = (props) => {
  const {
    id,
    name,
    status,
    type = 'text',
    value,
    placeholder,
    contrast = false,
    startAdornment,
    endAdornment,
    onChange,
    onBlur,
  } = props;

  return (
    <Container
      $status={status}
      $contrast={contrast}
    >
      <Slot>
        {startAdornment}
      </Slot>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Slot>
        {endAdornment}
      </Slot>
      {status && (
        <Status>
          {status === 'error' && (
            <Error data-testid="input-status-error">!</Error>
          )}
        </Status>
      )}
    </Container>
  );
};

Input.propTypes = propTypes;

export default Input;
