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
    } else {
      navigate('empresas');
    }
  }, [term]);

  return (
    <Container>
      <SearchField
        id="search"
        name="search"
        type="text"
        trimTerm
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
    </Container>
  );
};

export default Search;
