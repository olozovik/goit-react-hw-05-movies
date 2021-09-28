import PropTypes from 'prop-types';
import { Container } from '../../Container/Container';
import { Item, List, Name } from './Reviews.styled';
import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../api/fetchMovies';

const Reviews = ({ setStatus }) => {
  const [movieId, setMovieId] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    setMovieId(params.movieId);
  }, [params.movieId]);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    setStatus('pending');
    getMovieReviews(movieId).then(data => {
      setReviews(data);
      setStatus('idle');
    });
  }, [movieId, setStatus]);

  return reviews.length ? (
    <Container>
      <List>
        {reviews.map((review, idx) => {
          const { author, content } = review;
          return (
            <Item key={idx}>
              <Name>Author: {author}</Name>
              <p>{content}</p>
            </Item>
          );
        })}
      </List>
    </Container>
  ) : (
    <Container>
      <p>We don't have any reviews for this movie.</p>
    </Container>
  );
};

Reviews.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default Reviews;
