import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';

const HomePage = ({ onSelectMovie }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList movies={movies} onSelectedMovie={onSelectMovie} />
    </Container>
  );
};

export default HomePage;
