import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { HomeTitle } from '../components/HomeTitle/HomeTitle';

const HomePage = ({ setStatus }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    getMovies()
      .then(setMovies)
      .then(() => {
        setStatus('idle');
      });
  }, [setStatus]);

  return (
    <Container>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList movies={movies} />
    </Container>
  );
};

HomePage.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default HomePage;
