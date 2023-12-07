import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import imgLogo from '../../assets/images/logo-mountain-48.png';
import { HOME_ROUTE } from 'constants/routes';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Link className="logo" to={HOME_ROUTE}>
          <img src={imgLogo} alt="logo" />
        </Link>
        <nav className="navigation">
          <NavLink className="navlink" to={HOME_ROUTE}>
            Головна
          </NavLink>
          <NavLink className="navlink" to={`${HOME_ROUTE}#routes`}>
            Маршрути
          </NavLink>
          <NavLink className="navlink" to={`${HOME_ROUTE}#gallery`}>
            Галерея
          </NavLink>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
