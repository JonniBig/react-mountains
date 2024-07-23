import React, { useContext } from 'react';
import { StyledAddRoute } from './AddGuestRoute.styled';
import { themeContext } from 'context/ThemeContext';

const AddGuestRoute = () => {
  const { theme } = useContext(themeContext);

  return (
    <StyledAddRoute $theme={theme}>
      <form className="form">
        <h2>Додай свій маршрут</h2>
        <div className="labelSection">
          <label>
            <span>Назва маршруту</span>
            <input type="text" />
          </label>
          <label>
            <span>Корткий опис маршруту та фотокартка</span>
            <input type="text" />
            <input type="file" />
          </label>
          <label>
            <span>Фонове зображення</span>
            <input type="file" />
          </label>{' '}
          <label>
            <span>Основний опис маршруту</span>
            <input type="text" />
          </label>
          <label>
            <span>Галерея</span>
            <input type="file" />
          </label>
        </div>
        <button type="submit" className="addRouteBtn">
          Опублікувати
        </button>
      </form>
    </StyledAddRoute>
  );
};

export default AddGuestRoute;
