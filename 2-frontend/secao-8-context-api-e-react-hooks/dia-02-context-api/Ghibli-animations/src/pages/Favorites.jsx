import { useContext } from "react";
import FilmsContext from "../context/FilmsContext";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";

export default function Favorites() {
  const { favorites } = useContext(FilmsContext);
  return (
    <>
      <Header />
      <main>
        <h1>Favorites</h1>
        <section>
          {
            favorites.map((film) => (
              <FilmCard
                key={ film.id }
                film={ film }
                isFavorite={ favorites.some((favorite) => favorite.id === film.id) }
              />
            ))
          }
        </section>
      </main>
    </>
  );
}