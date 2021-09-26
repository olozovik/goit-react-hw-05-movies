import styled from '@emotion/styled';
import { BsArrowLeft } from 'react-icons/bs';

const Button = styled.button`
  margin-bottom: 6px;
  display: flex;
  padding: 3px 10px;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 100ms linear;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  }
`;

const Icon = styled(BsArrowLeft)`
  margin-right: 5px;
`;

export { Button, Icon };
