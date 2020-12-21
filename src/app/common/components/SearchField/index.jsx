import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../utils/hooks/useDebouce';
import SearchIcon from '../icons/SearchIcon';
import CloseIcon from '../icons/CloseIcon';
import IconButton from '../IconButton';
import Input from '../Input';

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
   * Specifies the value of an input element.
   */
  value: PropTypes.string,
  /**
   * Specifies a short hint that describes the expected value of an input element.
   */
  placeholder: PropTypes.string,
  /**
   * Specifies whether to return the search term without spaces.
   */
  trimTerm: PropTypes.bool,
  /**
   * Specifies the value in milliseconds to call onChange.
   */
  debounceTime: PropTypes.number,
  /**
   * Callback function for handle blur event.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function for handle change event.
   */
  onChange: PropTypes.func.isRequired,
};

const SearchField = (props) => {
  const {
    id,
    name,
    value,
    placeholder,
    trimTerm = true,
    debounceTime = 1000,
    onChange,
    onBlur,
  } = props;

  const [term, setTerm] = useState(value);
  const debouncedTerm = useDebounce(term, debounceTime);

  useEffect(() => {
    const searchTerm = trimTerm
      ? debouncedTerm?.trim()
      : debouncedTerm;

    onChange({ target: { value: searchTerm } });
  }, [trimTerm, debouncedTerm]);

  function handleChange(searchTerm) {
    setTerm(searchTerm);
  }

  function handleClearSearch() {
    onChange({ target: { value: '' } });
    setTerm('');
  }

  return (
    <Input
      contrast
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
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
