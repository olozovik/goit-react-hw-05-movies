import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const List = styled.ul`
  padding-left: 45px;
  color: black;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const LinkStyled = styled(Link)`
  color: #0000e0;
`;

export { List, Item, LinkStyled };
