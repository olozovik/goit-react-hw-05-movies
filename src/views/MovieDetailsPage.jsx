import { Container } from '../components/Container/Container';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/fetchMovies';
import { useState } from 'react';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetailsPage = () => {
  const [image, setImage] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  getMovieDetails(Number(movieId)).then(data => {
    setImage(data.poster_path);
  });

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <Container>
      <button type="button" onClick={onGoBackClick}>
        Go back
      </button>
      <h1>
        <img src={image && `${imgBaseUrl}${image}`} alt="" />
      </h1>
    </Container>
  );
};

export default MovieDetailsPage;
