import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input';
import EyeIcon from '../icons/EyeIcon';
import EyeEmptyIcon from '../icons/EyeEmptyIcon';
import { IconButton } from './styles';

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
   * Specifies a short hint that describes the expected value of an input element.
   */
  placeholder: PropTypes.string,
  /**
   * Element to be rendered at the beginning of the component.
   */
  startAdornment: PropTypes.node,
  /**
   * Specifies the status type of the input.
   */
  status: PropTypes.oneOf(['error', false]),
  /**
   * Specifies the value of an input element
   */
  value: PropTypes.string,
  /**
   * Callback function for handle change event.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback function for handle blur event.
   */
  onBlur: PropTypes.func,
};

const PasswordField = (props) => {
  const {
    id,
    name,
    status,
    placeholder,
    startAdornment,
    value,
    onChange,
    onBlur,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Input
      id={id}
      name={name}
      type={showPassword ? 'text' : 'password'}
      status={status}
      placeholder={placeholder}
      startAdornment={startAdornment}
      endAdornment={value && (
        <IconButton
          type="button"
          onClick={() => handleShowPassword()}
        >
          {showPassword
            ? <EyeIcon />
            : <EyeEmptyIcon />}
        </IconButton>
      )}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

PasswordField.propTypes = propTypes;

export default PasswordField;
