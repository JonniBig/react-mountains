import React, { useEffect, useState } from 'react';
import { StyledThemeSwitcher } from './ThemeSwitcher.styled';

const THEME_INITIAL_STATE = 'ligth';

const ThemeSwitcher = () => {
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
    <StyledThemeSwitcher>
      <input
        type="checkbox"
        id="switch"
        onChange={onToggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="switch"></label>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
