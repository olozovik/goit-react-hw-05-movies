import {
  useHistory,
  useLocation,
  useParams,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { getMovieDetails } from '../api/fetchMovies';
import { lazy, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../components/Container/Container';
import { MovieImage } from '../components/MovieDetails/MovieImage/MovieImage';
import { MainContent } from '../components/MovieDetails/MainContent/MainContent';
import { MovieDescription } from '../components/MovieDetails/MovieDescription/MovieDescription';
import { AdditionalInfo } from '../components/MovieDetails/AdditionalInfo/AdditionalInfo';
import noPhoto from 'assets/images/no_photo.png';
import { ButtonGoBack } from '../components/MovieDetails/ButtonGoBack/ButtonGoBack';
import { MainContentWrapper } from '../components/MovieDetails/MainContentWrapper/MainContentWrapper';

const Cast = lazy(() =>
  import('components/MovieDetails/Cast/Cast' /* webpackChunkName: 'cast' */),
);
const Reviews = lazy(() =>
  import(
    'components/MovieDetails/Reviews/Reviews' /* webpackChunkName: 'reviews' */
  ),
);

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetailsPage = ({ setStatus, status }) => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setStatus('pending');
    getMovieDetails(Number(movieId)).then(data => {
      const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
      } = data;
      setMovie(p => ({ ...p, image: poster_path }));
      setMovie(p => ({ ...p, title }));
      setMovie(p => ({ ...p, releaseYear: Number.parseInt(release_date) }));
      setMovie(p => ({
        ...p,
        userScore: Math.round(Number(vote_average) * 10),
      }));
      setMovie(p => ({ ...p, overview }));
      setMovie(p => ({
        ...p,
        genres: genres.map(genre => genre.name).join(', '),
      }));
      setStatus('resolved');
    });
  }, [movieId, setStatus]);

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  const { image, title, releaseYear, userScore, overview, genres } = movie;
  return (
    <>
      <MainContentWrapper>
        <Container>
          <ButtonGoBack onClick={onGoBackClick} />
          {status === 'resolved' && (
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
          )}
        </Container>
      </MainContentWrapper>
      <AdditionalInfo location={location?.state?.from} />
      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
};

MovieDetailsPage.propTypes = {
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.func.isRequired,
};

export default MovieDetailsPage;
