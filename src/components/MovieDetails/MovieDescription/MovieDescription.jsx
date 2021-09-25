import PropTypes from 'prop-types';
import { Wrapper } from './MovieDescription.styled';

const MovieDescription = ({
  title,
  releaseYear,
  userScore,
  overview,
  genres,
}) => {
  return (
    <Wrapper>
      <h2>
        {title && title} {releaseYear && <span>({releaseYear})</span>}
      </h2>
      {userScore && <p>User Score: {userScore}%</p>}
      {overview && (
        <>
          <h3>Overview</h3>
          <p>{overview}</p>
        </>
      )}
      {genres && (
        <>
          <h3>Genres</h3>
          <p>{genres}</p>
        </>
      )}
    </Wrapper>
  );
};

MovieDescription.propTypes = {
  title: PropTypes.string,
  releaseYear: PropTypes.number,
  userScore: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export { MovieDescription };
