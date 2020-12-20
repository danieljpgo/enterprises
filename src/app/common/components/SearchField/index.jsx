import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../utils/hooks/useDebouce';
import SearchIcon from '../icons/SearchIcon';
import CloseIcon from '../icons/CloseIcon';
import IconButton from '../IconButton';
import Input from '../Input';

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  trimTerm: PropTypes.bool,
  debounceTime: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

const SearchField = (props) => {
  const {
    id,
    name,
    value,
    trimTerm = false,
    debounceTime = 1000,
    onChange,
    onBlur,
  } = props;

  const [term, setTerm] = useState(value);
  const debouncedTerm = useDebounce(term, debounceTime);

  useEffect(() => {
    const searchTerm = trimTerm
      ? debouncedTerm.trim()
      : debouncedTerm;

    onChange({ target: { value: searchTerm } });
  }, [trimTerm, debouncedTerm]);

  function handleChange(searchTerm) {
    setTerm(searchTerm);
  }

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
      value={term}
      onChange={(event) => handleChange(event.target.value)}
      onBlur={onBlur}
    />
  );
};

SearchField.propTypes = propTypes;

export default SearchField;
