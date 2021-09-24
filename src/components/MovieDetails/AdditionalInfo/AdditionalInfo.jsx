import { Link, useRouteMatch } from 'react-router-dom';

const AdditionalInfo = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export { AdditionalInfo };
