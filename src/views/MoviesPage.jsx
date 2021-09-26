import { Container } from '../components/Container/Container';
import { MoviesList } from '../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';
import { MoviesPageWrapper } from '../components/MoviesPage/MoviesPageWrapper';
import { Form } from '../components/MoviesPage/Form/Form';

const MoviesPage = ({ handleQuery, movies }) => {
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
  handleQuery: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesPage;
