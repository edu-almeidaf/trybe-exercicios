import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import xablauReducer from './xablauReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  xablau: xablauReducer,
});

export default rootReducer;


// const reducer1 = {
//   categories: [...data],
//   selectedCategory: null,
//   selectedMovie: null,
// }

// const reducer2 = {
//   turma: 29,
//   tribo: 'A'
// };

// const rootReducer = {
//   movie: {
//     categories: [...data],
//     selectedCategory: null,
//     selectedMovie: null,
//   },
//   xablau: {
//     turma: 29,
//     tribo: 'A'
//   }
// }