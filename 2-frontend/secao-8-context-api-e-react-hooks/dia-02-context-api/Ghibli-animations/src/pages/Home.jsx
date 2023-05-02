import { useContext } from "react";
import { FilmsContext } from "../context/FilmsProvider";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";

function Home() {
  const { films, favorites } = useContext(FilmsContext);
  
  return (
    <>
      <Header />
      <main>
        <h1>Films</h1>
        <section>
          {
            films.map((film) => (
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

export default Home;