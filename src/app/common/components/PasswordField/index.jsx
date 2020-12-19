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
  status: PropTypes.oneOf(['error']),
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

  const type = showPassword ? 'text' : 'password';

  return (
    <Input
      id={id}
      name={name}
      type={type}
      status={status}
      startAdornment={startAdornment}
      endAdornment={(
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
