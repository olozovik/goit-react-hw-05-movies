import { Container } from '../Container/Container';
import { NavlinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavlinkStyled to="/" exact>
            Home
          </NavlinkStyled>
        </li>
        <li>
          <NavlinkStyled to="/movies">Movies</NavlinkStyled>
        </li>
      </ul>
    </Container>
  );
};

export { Navigation };
