import { Link, useLocation } from 'react-router-dom';

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

export { MoviesList };
