import { useContext } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import FilterRepos from '../components/FilterRepos';

export default function Home() {
  const { gitData, isLoading } = useContext(AuthContext);
  return (
    <div className="Home">
      { isLoading ? <h2>Carregando...</h2> : (
        <>
          <div className="App__Menu">
            <div className="App__ContentMenuItems">
              <img
                src={ gitData.avatar_url }
                alt={ `Imagem do usuário ${gitData.name}` }
              />
              <h3>{ gitData.name }</h3>
              <Link to="/"> ( Logout ) </Link>
            </div>
          </div>
          <FilterRepos />
        </>
      ) }
    </div>
  );
}
