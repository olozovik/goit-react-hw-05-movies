import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container/Container';
import { getMovies } from '../api/fetchMovies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { HomeTitle } from '../components/HomeTitle/HomeTitle';

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
      <HomeTitle>Trending today</HomeTitle>
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
