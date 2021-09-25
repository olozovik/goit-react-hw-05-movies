import { useRouteMatch } from 'react-router-dom';
import {
  Wrapper,
  Item,
  LinkStyled,
  List,
  Title,
} from './AdditionalInfo.styled';
import { Container } from '../../Container/Container';

const AdditionalInfo = () => {
  const { url } = useRouteMatch();
  return (
    <Wrapper>
      <Container>
        <Title>Additional information:</Title>
        <List>
          <Item>
            <LinkStyled to={`${url}/cast`}>Cast</LinkStyled>
          </Item>
          <Item>
            <LinkStyled to={`${url}/reviews`}>Reviews</LinkStyled>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
};

export { AdditionalInfo };
