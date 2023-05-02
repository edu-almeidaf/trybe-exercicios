import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const FilmsContext = createContext();

function FilmsProvider({ children }) {
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
      { children }
    </FilmsContext.Provider>
  )
}

FilmsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
}

export default FilmsProvider;