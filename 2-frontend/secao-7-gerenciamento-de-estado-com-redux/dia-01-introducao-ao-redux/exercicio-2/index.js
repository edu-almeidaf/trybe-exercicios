import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_THEME' });
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_STATUS' });
});

store.subscribe(() => {
  const { theme, status } = store.getState();
  const window = document.querySelector('body');
  const userStatus = document.querySelector('#status')
  if (theme === 'light') {
    window.style.backgroundColor = 'white';
    window.style.color = '#333';
    themeButton.innerHTML = 'Dark Mode';
  } else {
    window.style.backgroundColor = '#333';
    window.style.color = 'white';
    themeButton.innerHTML = 'Light Mode';
  }
  if (status === 'offline') {
    userStatus.innerHTML = 'Offline';
    statusButton.innerHTML = 'Ficar Online';
  } else {
    userStatus.innerHTML = 'Online';
    statusButton.innerHTML = 'Ficar Offline';
  }
});