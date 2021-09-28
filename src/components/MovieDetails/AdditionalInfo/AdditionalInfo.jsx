import { useRouteMatch } from 'react-router-dom';
import {
  Wrapper,
  Item,
  LinkStyled,
  List,
  Title,
} from './AdditionalInfo.styled';
import { Container } from '../../Container/Container';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ location }) => {
  const { url } = useRouteMatch();
  return (
    <Wrapper>
      <Container>
        <Title>Additional information:</Title>
        <List>
          <Item>
            <LinkStyled
              to={{ pathname: `${url}/cast`, state: { from: location } }}
            >
              Cast
            </LinkStyled>
          </Item>
          <Item>
            <LinkStyled
              to={{ pathname: `${url}/reviews`, state: { from: location } }}
            >
              Reviews
            </LinkStyled>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
};

AdditionalInfo.propTypes = {
  location: PropTypes.object,
};

export { AdditionalInfo };
