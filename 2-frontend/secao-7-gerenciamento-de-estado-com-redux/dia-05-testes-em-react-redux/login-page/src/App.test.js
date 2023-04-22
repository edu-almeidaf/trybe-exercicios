import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

test('Ao acessar a rota /profile a partir da home, o nome da pessoa deverá ser renderizado', async () => {
  
  renderWithRouterAndRedux(<App />);
  
  const nameInput = screen.getByRole('textbox');
  expect(nameInput).toBeInTheDocument();
  
  userEvent.type(nameInput, 'Tryber');
  expect(nameInput.value).toBe('Tryber');

  const loginButton = screen.getByRole('button');
  userEvent.click(loginButton);

  expect(await screen.findByText('Boas vindas, Tryber')).toBeInTheDocument();
});

test('Ao acessar diretamente a rota /profile, o nome da pessoa não pode ser renderizado', () => {
  const initialEntries = ['/profile'];

  renderWithRouterAndRedux(<App />, { initialEntries });

  expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Você precisa realizar o login')).toBeInTheDocument();
});

test('Ao acessar diretamente a rota /profile e alterando o estado global, o nome da pessoa deve ser renderizado', () => {
  const initialEntries = ['/profile']
  const initialState = { userName: 'Tryber' }

  renderWithRouterAndRedux(<App />, { initialState, initialEntries });

  expect(screen.queryByText('Você precisa realizar o login')).not.toBeInTheDocument();
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});