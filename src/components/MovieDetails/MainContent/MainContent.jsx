import { Wrapper } from './MainContent.styled';
import PropTypes from 'prop-types';

const MainContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export { MainContent };
