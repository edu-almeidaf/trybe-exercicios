import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.colors.length - 1,
      };
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, createRandomColor()],
        index: state.colors.length,
      }
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const incrementButton = document.querySelector('#next');
const decrementButton = document.querySelector('#previous');
const randomColorButton = document.querySelector('#random');

incrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
})

decrementButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
})

randomColorButton.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
})

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
})

const createRandomColor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const random = () => Math.floor(Math.random() * oneChar.length);
  for (let index = 0; index < 6; index += 1) {
    color += oneChar[random()];
  }
  return color;
}