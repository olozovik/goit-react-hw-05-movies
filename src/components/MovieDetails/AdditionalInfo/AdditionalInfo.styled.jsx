import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
`;

const List = styled.ul`
  padding-left: 40px;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const LinkStyled = styled(NavLink)`
  color: #0000e0;

  &.active {
    color: #dca002;
  }
`;

export { Wrapper, Title, List, Item, LinkStyled };
