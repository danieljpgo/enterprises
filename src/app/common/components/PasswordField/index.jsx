import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input';
import EyeIcon from '../icons/EyeIcon';
import EyeEmptyIcon from '../icons/EyeEmptyIcon';
import { IconButton } from './styles';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  status: PropTypes.oneOf(['error', false]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
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
