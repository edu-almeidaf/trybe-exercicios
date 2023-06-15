import { useState } from "react";
import ThemeContext from "./ThemeContext";

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  const toggleTheme = () => {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={`app ${themeColor}`}>{ children }</div>
    </ThemeContext.Provider>
  )
}