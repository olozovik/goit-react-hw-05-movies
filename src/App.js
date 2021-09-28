import { lazy, Suspense, useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './components/NotFound/NotFound';
import { Loader } from './components/Loader/Loader';
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
  const [status, setStatus] = useState('idle');

  const changeStatus = useCallback(status => {
    setStatus(status);
  }, []);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {status === 'pending' && <Loader />}
      <Suspense fallback={<p style={{ color: 'transparent' }}>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage setStatus={changeStatus} status={status} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage setStatus={changeStatus} status={status} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage setStatus={changeStatus} status={status} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <Toaster />
    </>
  );
};

export default App;
