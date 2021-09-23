import { lazy, Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { NotFound } from './components/NotFound/NotFound';
import MoviesPage from './views/MoviesPage';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: 'homePage' */),
);

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onSelectMovie = id => {
    setSelectedMovie(id);
  };

  return (
    <>
      <Navigation />
      <Suspense fallback={'Downloading...'}>
        <Switch>
          <Route path="/" exact>
            <HomePage onSelectMovie={onSelectMovie} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage onSelectMovie={onSelectMovie} />
          </Route>
          {/*<Route path="/movies/:id">*/}
          {/*  <HomePage />*/}
          {/*</Route>*/}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
