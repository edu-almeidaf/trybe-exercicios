import React from 'react';
import { Provider, /* applyMiddleware */ } from 'react-redux';
import { render } from '@testing-library/react';
import { legacy_createStore as createStore } from 'redux';
import userReducer from '../redux/reducers/userReducer';
import { Router } from 'react-router-dom';
// import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';

export const renderWithRouterAndRedux = (
  component,
  {
    initialState = {},
    store = createStore(
      userReducer,
      initialState,
      // applyMiddleWare(thunk)
    ),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {}
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        { component }
      </Provider>
    </Router>
  ),
  history,
})

// Se for utilizar redux-thunk, só descomentar as linhas comentadas.