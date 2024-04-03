import { useContext } from 'react';
import { StyledThemeSwitcher } from './ThemeSwitcher.styled';
import { themeContext } from 'context/ThemeContext';

const ThemeSwitcher = () => {
  const { onToggleTheme, theme } = useContext(themeContext);
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
