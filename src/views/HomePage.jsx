import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';

const HomePage = ({ resetSearch }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  useEffect(() => {
    resetSearch();
  }, [resetSearch]);

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default HomePage;
