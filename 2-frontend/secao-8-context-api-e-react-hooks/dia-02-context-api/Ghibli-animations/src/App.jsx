import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFilms();
  }, []);

  const toggleFavorite = (film) => {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === film.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== film.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, film]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
  }

  return (
    <FilmsContext.Provider value={ context }>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;