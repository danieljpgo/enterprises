import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Container } from './styles';
import SearchField from '../../../../components/SearchField';

const Search = () => {
  const [term, setTerm] = useState('');
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
