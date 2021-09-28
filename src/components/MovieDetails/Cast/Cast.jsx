import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character, Item, List, Name, Thumb } from './Cast.styled';
import noPhoto from 'assets/images/no_photo.png';
import { Container } from '../../Container/Container';
import { getMovieCast } from '../../../api/fetchMovies';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [movieId, setMovieId] = useState(null);
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

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
      setStatus('resolved');
    });
  }, [movieId, setStatus]);

  return cast ? (
    <Container>
      {status === 'resolved' && (
        <List>
          {cast.map((item, idx) => {
            const { name, profile_path, character } = item;
            return (
              <Item key={idx}>
                <Thumb>
                  <img
                    src={
                      profile_path ? `${imgBaseUrl}${profile_path}` : noPhoto
                    }
                    alt={name}
                  />
                </Thumb>
                <Name>{name}</Name>
                {character && <Character>Character: {character}</Character>}
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  ) : (
    <Container>
      <p>There are no actors to show.</p>
    </Container>
  );
};

export default Cast;
