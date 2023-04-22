export const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(movie, category) {
  return {
    type: SELECT_MOVIE,
    payload: {
      movie,
      category,
    },
  };
}
