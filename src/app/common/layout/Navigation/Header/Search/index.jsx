import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Container } from './styles';
import SearchField from '../../../../components/SearchField';

const Search = () => {
  const { search } = useLocation();
  const urlSearch = search.split('=')[1];

  const [term, setTerm] = useState(urlSearch || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (term) {
      navigate(`empresas?name=${term}`);
      return;
    } 
    navigate('empresas');
  }, [term]);

  function handleSearchChange(value) {
    setTerm(value);
  }

  return (
    <Container>
      <SearchField
        id="search"
        name="search"
        type="text"
        trimTerm
        value={term}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
    </Container>
  );
};

export default Search;
