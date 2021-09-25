import { Container } from '../components/Container/Container';
import {
  useHistory,
  useLocation,
  useParams,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { getMovieDetails } from '../api/fetchMovies';
import { useEffect, useState } from 'react';
import { MovieImage } from '../components/MovieDetails/MovieImage/MovieImage';
import { MainContent } from '../components/MovieDetails/MainContent/MainContent';
import { MovieDescription } from '../components/MovieDetails/MovieDescription/MovieDescription';
import { AdditionalInfo } from '../components/MovieDetails/AdditionalInfo/AdditionalInfo';
import { Cast } from '../components/MovieDetails/Cast/Cast';
import { Reviews } from '../components/MovieDetails/Reviews/Reviews';
import noPhoto from 'assets/images/no_photo.png';
import PropTypes from 'prop-types';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetailsPage = ({ setStatus, setLoadTime }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [overview, setOverView] = useState(null);
  const [genres, setGenres] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setStatus('pending');
    const startLoad = new Date();
    getMovieDetails(Number(movieId)).then(data => {
      const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
        credits,
        reviews,
      } = data;
      setImage(poster_path);
      setTitle(title);
      setReleaseYear(Number.parseInt(release_date));
      setUserScore(Math.round(Number(vote_average) * 10));
      setOverView(overview);
      setGenres(genres.map(genre => genre.name).join(', '));
      setCast(credits.cast);
      setReviews(reviews.results);
      setStatus('idle');
      const finishLoad = new Date();
      const time = finishLoad - startLoad;
      setLoadTime(time);
    });
  }, [movieId, setStatus, setLoadTime]);

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <Container>
      <button type="button" onClick={onGoBackClick}>
        Go back
      </button>
      <MainContent>
        <MovieImage
          url={image ? `${imgBaseUrl}${image}` : noPhoto}
          title={title}
        />
        <MovieDescription
          title={title}
          releaseYear={releaseYear}
          userScore={userScore}
          overview={overview}
          genres={genres}
        />
      </MainContent>
      <AdditionalInfo />
      <Route path={`${path}/cast`}>
        <Cast cast={cast} />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews reviews={reviews} />
      </Route>
    </Container>
  );
};

MovieDetailsPage.propTypes = {
  setStatus: PropTypes.func.isRequired,
  setLoadTime: PropTypes.func.isRequired,
};

export default MovieDetailsPage;