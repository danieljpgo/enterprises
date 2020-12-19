import PropTypes from 'prop-types';
import Input from '../Input';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  startAdornment: PropTypes.node,
};

const TextField = (props) => {
  const {
    id,
    name,
    type,
    startAdornment,
  } = props;

  return (
    <Input
      id={id}
      name={name}
      type={type}
      startAdornment={startAdornment}
      endAdornment={(
        <>
          <div>olho</div>
          <div>!</div>
        </>
      )}
    />
  );
};

TextField.propTypes = propTypes;

export default TextField;
