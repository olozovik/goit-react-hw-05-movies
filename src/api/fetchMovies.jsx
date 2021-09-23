import axios from 'axios';

const getMovies = async () => {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=98b2d661a291459629d67fe532d04a86',
  );
  return data.data.results;
};

export { getMovies };
