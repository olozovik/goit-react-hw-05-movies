const MovieDescription = ({
  title,
  releaseYear,
  userScore,
  overview,
  genres,
}) => {
  return (
    <>
      <div>
        <h2>
          {title && title} {releaseYear && <span>({releaseYear})</span>}
        </h2>
        {userScore && <p>{userScore}%</p>}
        {overview && (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        )}
        {genres && (
          <>
            <h3>Genres</h3>
            <p>{genres}</p>
          </>
        )}
      </div>
    </>
  );
};

export { MovieDescription };
