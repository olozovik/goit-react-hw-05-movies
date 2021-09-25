import PropTypes from 'prop-types';
import { Container } from '../../Container/Container';
import { Item, List, Name } from './Reviews.styled';

const Reviews = ({ reviews }) => {
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
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export { Reviews };
