import { Thumb } from './MovieImageStyled';

const MovieImage = ({ url }) => {
  return (
    <Thumb>
      <img src={url} alt="" />
    </Thumb>
  );
};

export { MovieImage };
