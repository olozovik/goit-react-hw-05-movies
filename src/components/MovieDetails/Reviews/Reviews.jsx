import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return reviews.length ? (
    <ul>
      {reviews.map((review, idx) => {
        const { author, content } = review;
        return (
          <li key={idx}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export { Reviews };