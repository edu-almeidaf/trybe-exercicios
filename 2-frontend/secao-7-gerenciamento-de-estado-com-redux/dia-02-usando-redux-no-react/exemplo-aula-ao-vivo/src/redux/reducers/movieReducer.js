import { SELECT_MOVIE } from '../actions';
import data from '../../data';

const INITIAL_STATE = {
  categories: [...data],
  selectedCategory: null,
  selectedMovie: null,
}

const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_MOVIE: {
      return {
        ...state,
        selectedMovie: payload.movie,
        selectedCategory: payload.category,
      }
    }
    default:
      return state;
    }
}

export default movieReducer;