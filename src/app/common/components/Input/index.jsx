import PropTypes from 'prop-types';
import {
  Container,
  Error,
  Status,
  Slot,
} from './styles';

const propTypes = {
  /**
   * Specifies the id of input.
   */
  id: PropTypes.string,
  /**
   * Specifies the name of input.
   */
  name: PropTypes.string,
  /**
   * Specifies the status type of the input.
   */
  status: PropTypes.oneOf(['error', false]),
  /**
   * Specifies the type input element to display.
   */
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'date', 'datetime-local', 'search', 'tel', 'time']),
  /**
   * Specifies a short hint that describes the expected value of an input element.
   */
  placeholder: PropTypes.string,
  /**
   * Apply contrast colors on input
   */
  contrast: PropTypes.bool,
  /**
   * Specifies the value of an input element
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  /**
   * Element to be rendered at the beginning of the component.
   */
  startAdornment: PropTypes.node,
  /**
   * Element to be rendered at the end of the component.
   */
  endAdornment: PropTypes.node,
  /**
   * Callback function for handle change event.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback function for handle blur event.
   */
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
      {endAdornment && (
        <Slot>
          {endAdornment}
        </Slot>
      )}
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
