import { Thumb } from './Cast.styled';
import noPhoto from 'assets/images/no_photo.png';
import PropTypes from 'prop-types';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = ({ cast }) => {
  return cast ? (
    cast.map((item, idx) => {
      const { name, profile_path, character } = item;
      return (
        <li key={idx}>
          <Thumb>
            <img
              src={profile_path ? `${imgBaseUrl}${profile_path}` : noPhoto}
              alt={name}
            />
          </Thumb>
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      );
    })
  ) : (
    <p>There are no actors to show.</p>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
};

export { Cast };
