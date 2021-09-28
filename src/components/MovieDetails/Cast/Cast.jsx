import { Character, Item, List, Name, Thumb } from './Cast.styled';
import noPhoto from 'assets/images/no_photo.png';
import PropTypes from 'prop-types';
import { Container } from '../../Container/Container';
import { getMovieCast } from '../../../api/fetchMovies';
import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = ({ setStatus }) => {
  const [movieId, setMovieId] = useState(null);
  const [cast, setCast] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    setMovieId(params.movieId);
  }, [params.movieId]);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    setStatus('pending');
    getMovieCast(movieId).then(data => {
      setCast(data);
      setStatus('idle');
    });
  }, [movieId, setStatus]);

  return cast ? (
    <Container>
      <List>
        {cast.map((item, idx) => {
          const { name, profile_path, character } = item;
          return (
            <Item key={idx}>
              <Thumb>
                <img
                  src={profile_path ? `${imgBaseUrl}${profile_path}` : noPhoto}
                  alt={name}
                />
              </Thumb>
              <Name>{name}</Name>
              {character && <Character>Character: {character}</Character>}
            </Item>
          );
        })}
      </List>
    </Container>
  ) : (
    <Container>
      <p>There are no actors to show.</p>
    </Container>
  );
};

Cast.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default Cast;
