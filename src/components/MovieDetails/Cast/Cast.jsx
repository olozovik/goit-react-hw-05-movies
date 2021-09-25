import { Character, Item, List, Name, Thumb } from './Cast.styled';
import noPhoto from 'assets/images/no_photo.png';
import PropTypes from 'prop-types';
import { Container } from '../../Container/Container';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = ({ cast }) => {
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
  cast: PropTypes.arrayOf(PropTypes.object),
};

export { Cast };
