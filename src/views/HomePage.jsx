import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';

const HomePage = ({ resetSearch, setStatus, setLoadTime }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    const startLoad = new Date();
    getMovies()
      .then(setMovies)
      .then(() => {
        setStatus('idle');
        const finishLoad = new Date();
        const time = finishLoad - startLoad;
        setLoadTime(time);
      });
  }, [setStatus, setLoadTime]);

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

HomePage.propTypes = {
  resetSearch: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setLoadTime: PropTypes.func.isRequired,
};

export default HomePage;
