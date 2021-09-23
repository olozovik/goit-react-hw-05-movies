import { Link } from 'react-router-dom';

const MoviesList = ({ movies, onSelectedMovie }) => {
  return (
    movies && (
      <ul>
        {movies.map(({ id, name, title }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              onClick={() => {
                onSelectedMovie(id);
              }}
            >
              {name ?? title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export { MoviesList };
