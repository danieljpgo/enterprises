import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import SearchIcon from '../../../../components/icons/SearchIcon';
import Input from '../../../../components/Input';
import { Container } from './styles';

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
      <Input
        id="search"
        name="search"
        type="text"
        startAdornment={<SearchIcon />}
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
    </Container>
  );
};

export default Search;
