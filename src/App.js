import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './components/NotFound/NotFound';
import { searchMovies } from './api/fetchMovies';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: 'homePage' */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: 'moviesPage' */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: 'movieDetailsPage' */),
);

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);

  const handleQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query < 1) {
      return;
    }
    searchMovies(query).then(setMovies);
  }, [query]);

  const resetSearch = useCallback(() => {
    setMovies([]);
    setQuery(null);
  }, []);

  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Downloading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage resetSearch={resetSearch} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage handleQuery={handleQuery} movies={movies} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
