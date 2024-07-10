import React, { createContext, useEffect, useState } from 'react';
export const themeContext = createContext();

const THEME_INITIAL_STATE = 'light';

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) return THEME_INITIAL_STATE;
    return savedTheme;
  });
  const onToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    const body = document.body;

    body.className = theme;

    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, onToggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
