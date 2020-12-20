import PropTypes from 'prop-types';
import SearchIcon from '../icons/SearchIcon';
import CloseIcon from '../icons/CloseIcon';
import IconButton from '../IconButton';
import Input from '../Input';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

const SearchField = (props) => {
  const {
    id,
    name,
    value,
    onChange,
    onBlur,
  } = props;

  function handleClearSearch() {
    onChange({ target: { value: '' } });
  }

  return (
    <Input
      contrast
      id={id}
      name={name}
      type="text"
      startAdornment={<SearchIcon />}
      endAdornment={value && (
        <IconButton
          type="button"
          onClick={() => handleClearSearch()}
        >
          <CloseIcon />
        </IconButton>
      )}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

SearchField.propTypes = propTypes;

export default SearchField;
