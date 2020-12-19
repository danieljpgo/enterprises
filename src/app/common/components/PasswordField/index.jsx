import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input';
import EyeIcon from '../EyeIcon';
import EyeEmptyIcon from '../EyeEmptyIcon';
import { IconButton } from './styles';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  startAdornment: PropTypes.node,
  status: PropTypes.oneOf(['error', false]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const PasswordField = (props) => {
  const {
    id,
    name,
    status,
    startAdornment,
    value,
    onChange,
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
    />
  );
};

PasswordField.propTypes = propTypes;

export default PasswordField;
