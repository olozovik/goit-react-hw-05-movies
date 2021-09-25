import { Thumb } from './MovieImageStyled';
import PropTypes from 'prop-types';

const MovieImage = ({ url, title }) => {
  return (
    <Thumb>
      <img src={url} alt={title} />
    </Thumb>
  );
};

MovieImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export { MovieImage };
