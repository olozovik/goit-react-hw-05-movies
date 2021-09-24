import { Container } from '../components/Container/Container';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';

const MoviesPage = ({ handleQuery, movies }) => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (query < 1) {
      return;
    }
    handleQuery(query);
  }, [query, handleQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value.trim();
    setQuery(value);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" autoFocus={true} autoComplete="off" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default MoviesPage;
