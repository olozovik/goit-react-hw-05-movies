import { useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from '../../Container/Container';
import { Item, List, Name } from './Reviews.styled';
import { getMovieReviews } from '../../../api/fetchMovies';

const Reviews = () => {
  const [movieId, setMovieId] = useState(null);
  const [reviews, setReviews] = useState([]);
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
    getMovieReviews(movieId).then(data => {
      setReviews(data);
      setStatus('resolved');
    });
  }, [movieId, setStatus]);

  return reviews.length ? (
    <Container>
      {status === 'resolved' && (
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
      )}
    </Container>
  ) : (
    <Container>
      <p>We don't have any reviews for this movie.</p>
    </Container>
  );
};

export default Reviews;
