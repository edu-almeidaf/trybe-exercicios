import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppProvider';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <div className={ isDarkTheme ? 'App__Dark' : 'App__Light' }>
      <Header />
      <Switch>
        <Route exact path="/" render={ () => (<Login />) } />
        <Route exact path="/home" render={ () => (<Home />) } />
        <Route exact path="*" component={ PageNotFound } />
      </Switch>
    </div>
  );
}

export default App;
