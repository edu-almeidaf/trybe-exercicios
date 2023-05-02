import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import logo from '../assets/trybe-negativo-preferencial.png';
import '../styles/Login.css';

// const mockUser = ['edu-almeidaf', 'tobiasitalo', 'nataliakoliveira'];
// const position = Math.floor(Math.random() * mockUser.length);

export default function FormLogin() {
  const [login, setLogin] = useState({ username: '', password: '' });

  const { isLoading, error, fetchData } = useContext(AuthContext);

  const isFilled = (login.username && login.password);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData(login.username);
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <form onSubmit={ handleSubmit }>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={ login.username }
              onChange={ handleChange }
            />
          </label>
          {
            error
            && <small style={ { color: 'red' } }>{ error.message }</small>
          }
          <label htmlFor="password" id="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={ login.password }
              onChange={ handleChange }
            />
          </label>

          <button
            type="submit"
            disabled={ !isFilled || isLoading }
          >
            { isLoading ? 'Carregando...' : 'Entrar' }
          </button>
        </form>
      </div>
    </div>
  );
}
