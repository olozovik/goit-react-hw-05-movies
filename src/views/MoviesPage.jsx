import { Container } from '../components/Container/Container';
import { MoviesList } from '../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';
import { MoviesPageWrapper } from '../components/MoviesPage/MoviesPageWrapper';
import { Form } from '../components/MoviesPage/Form/Form';
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { searchMovies } from '../api/fetchMovies';
import toast from 'react-hot-toast';

const MoviesPage = ({ setStatus }) => {
  const location = useLocation();
  const history = useHistory();
  const locationRef = useRef(location);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => {
    return new URLSearchParams(location.search).get('query') ?? '';
  });

  console.log();

  const handleQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    if (query.length < 1) {
      return;
    }
    history.push({ ...locationRef.current, search: `query=${query}` });
  }, [query, history]);

  useEffect(() => {
    if (query.length < 1) {
      return;
    }
    searchMovies(query).then(data => {
      setStatus('pending');
      if (data.length === 0) {
        toast.error('There are no films for this request');
      }
      setMovies(data);
      setStatus('idle');
    });
  }, [query, setStatus]);

  return (
    <MoviesPageWrapper>
      <Container>
        <Form handleQuery={handleQuery} />
        <MoviesList movies={movies} />
      </Container>
    </MoviesPageWrapper>
  );
};

MoviesPage.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default MoviesPage;
