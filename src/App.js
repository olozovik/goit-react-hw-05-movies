import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './components/NotFound/NotFound';
import { Loader } from './components/Loader/Loader';
import { searchMovies } from './api/fetchMovies';
import { Header } from './components/Header/Header';

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
  const [status, setStatus] = useState('idle');
  const [loadTime, setLoadTime] = useState(null);

  const handleQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query < 1) {
      return;
    }
    setStatus('pending');
    const startLoad = new Date();
    searchMovies(query)
      .then(setMovies)
      .then(() => {
        setStatus('idle');
        const finishLoad = new Date();
        const time = finishLoad - startLoad;
        setLoadTime(time);
      });
  }, [query]);

  const resetSearch = useCallback(() => {
    setMovies([]);
    setQuery(null);
  }, []);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {status === 'pending' && loadTime > 100 && <Loader />}
      <Suspense fallback={<p style={{ color: 'transparent' }}>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage
              resetSearch={resetSearch}
              setStatus={setStatus}
              setLoadTime={setLoadTime}
            />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage handleQuery={handleQuery} movies={movies} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage setStatus={setStatus} setLoadTime={setLoadTime} />
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
