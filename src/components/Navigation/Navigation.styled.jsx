import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavlinkStyled = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 18px;
  &.active {
    color: #df7185;
  }
`;

export { NavlinkStyled };
