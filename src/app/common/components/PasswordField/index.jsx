import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  startAdornment: PropTypes.node,
};

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    id,
    name,
    startAdornment,
  } = props;

  const type = showPassword ? 'text' : 'password';

  return (
    <Input
      id={id}
      name={name}
      type={type}
      startAdornment={startAdornment}
      endAdornment={(
        <>
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            olho
          </button>
          <div>!</div>
        </>
      )}
    />
  );
};

PasswordField.propTypes = propTypes;

export default PasswordField;
