import styled from '@emotion/styled';
import { BsArrowLeft } from 'react-icons/bs';

const Button = styled.button`
  margin-bottom: 6px;
  display: flex;
  padding: 2px 10px;
  background-color: whitesmoke;
  border: 1px solid #b4b3b3;
  border-radius: 4px;
`;

const Icon = styled(BsArrowLeft)`
  margin-right: 5px;
`;

export { Button, Icon };
