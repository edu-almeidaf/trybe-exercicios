import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counterReducer';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={ store }>{ component }</Provider>),
  store,
});

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdd = screen.queryAllByRole('button');

  expect(buttonAdd).toHaveLength(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test ('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 10,
    }
  }
  renderWithRedux(<App />, { initialState });

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
});

test ('O clique dos botões incrementa corretamente o valor do estado', async () => {
  renderWithRedux(<App />);
  const buttonAdd = screen.queryAllByRole('button');
  expect(buttonAdd.length).toBe(2);

  expect(screen.getByText('0')).toBeInTheDocument();
  
  userEvent.click(buttonAdd[0]);
  expect(await screen.findByText('1')).toBeInTheDocument();

  userEvent.click(buttonAdd[1]);
  expect(await screen.findByText('6')).toBeInTheDocument();
});

test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', async () => {
  const initialState = {
    counterReducer: {
      count: 5,
    }
  }
  renderWithRedux(<App />, { initialState });

  const buttons = screen.queryAllByRole('button');
  expect(buttons.length).toBe(2);

  expect(screen.getByText('5')).toBeInTheDocument();

  userEvent.click(buttons[0]);
  expect(await screen.findByText('6')).toBeInTheDocument();

  userEvent.click(buttons[1]);
  expect(await screen.findByText('11')).toBeInTheDocument();
});

test('Incrementa o valor da store ao clicar no botão', async () => {
  const { store } = renderWithRedux(<App />);

  expect(screen.getByText('0')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(0);

  const button = screen.getByText('Incrementa 1');
  userEvent.click(button);

  expect(await screen.findByText('1')).toBeInTheDocument();
  expect(store.getState().counterReducer.count).toBe(1);
});
