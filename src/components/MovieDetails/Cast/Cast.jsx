import { Thumb } from './Cast.styled';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

const Cast = ({ cast }) => {
  return cast ? (
    cast.map(item => {
      const { name, profile_path, character } = item;
      return (
        <>
          <li>
            <Thumb>
              <img src={`${imgBaseUrl}${profile_path}`} alt="" />
            </Thumb>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        </>
      );
    })
  ) : (
    <p>There are no actors to show.</p>
  );
};

export { Cast };
