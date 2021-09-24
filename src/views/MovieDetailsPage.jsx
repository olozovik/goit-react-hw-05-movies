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

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetailsPage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [overview, setOverView] = useState(null);
  const [genres, setGenres] = useState(null);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getMovieDetails(Number(movieId)).then(data => {
      const {
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
        credits,
      } = data;
      // console.log(data);
      setImage(poster_path);
      setTitle(title);
      setReleaseYear(Number.parseInt(release_date));
      setUserScore(Math.round(Number(vote_average) * 10));
      setOverView(overview);
      setGenres(genres.map(genre => genre.name).join(', '));
      setCast(credits.cast);
    });
  }, [movieId]);

  const onGoBackClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <Container>
      <button type="button" onClick={onGoBackClick}>
        Go back
      </button>
      <MainContent>
        <MovieImage url={image && `${imgBaseUrl}${image}`} />
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
    </Container>
  );
};

export default MovieDetailsPage;
