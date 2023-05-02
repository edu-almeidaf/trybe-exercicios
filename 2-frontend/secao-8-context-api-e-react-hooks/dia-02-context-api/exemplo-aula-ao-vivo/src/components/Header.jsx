import { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { AppContext } from '../context/AppProvider';

const props = { color: 'yellow' };
export default function Header() {
  const { handleChangeTheme, isDarkTheme } = useContext(AppContext);

  return (
    <header>
      <div
        className="theme"
        onClick={ handleChangeTheme }
        role="presentation"
      >
        {
          isDarkTheme
            ? <BsSunFill { ...props } />
            : <BsMoonFill />
        }
      </div>
    </header>
  );
}
