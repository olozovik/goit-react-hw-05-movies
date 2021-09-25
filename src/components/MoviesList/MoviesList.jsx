import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    movies && (
      <ul>
        {movies.map(({ id, name, title }) => (
          <li key={id}>
            <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
              {name ?? title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

MoviesList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
};

export { MoviesList };
