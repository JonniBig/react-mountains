import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import imgLogo from '../../assets/images/logo-mountain-48.png';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Link className="logo" to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
        <nav className="navigation">
          <NavLink className="navlink" to="/">
            Головна
          </NavLink>
          <NavLink className="navlink" to="#routes">
            Маршрути
          </NavLink>
          <NavLink className="navlink" to="#gallery">
            Галерея
          </NavLink>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
