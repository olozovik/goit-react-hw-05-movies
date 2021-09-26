import { Wrapper } from './MainContentWrapper.styled';
import PropTypes from 'prop-types';

const MainContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainContentWrapper.propTypes = {
  children: PropTypes.node,
};

export { MainContentWrapper };
