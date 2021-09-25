import PropTypes from 'prop-types';
import { Button, Icon } from './ButtonGoBack.styled';

const ButtonGoBack = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Icon />
      Go back
    </Button>
  );
};

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { ButtonGoBack };
