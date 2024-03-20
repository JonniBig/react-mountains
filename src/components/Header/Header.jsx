import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, StyledMobileMenu } from './Header.styled';
import imgLogo from '../../assets/images/logo-mountain-48.png';
import { ReactComponent as IconClose } from 'assets/images/close.svg';
import { ReactComponent as IconBurger } from 'assets/images/burger.svg';
import { HOME_ROUTE } from 'constants/routes';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);
  return (
    <StyledHeader>
      <div className="container">
        <Link className="logo" to={HOME_ROUTE}>
          <img src={imgLogo} alt="logo" />
        </Link>
        <ThemeSwitcher />
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
        <button type="button" className="btnBurger" onClick={onToggleMenu}>
          <IconBurger />
        </button>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onToggleMenu={onToggleMenu} />
    </StyledHeader>
  );
};
const MobileMenu = ({ isOpen, onToggleMenu }) => {
  return (
    <StyledMobileMenu className={isOpen ? 'open' : ''}>
      <button type="button" className="btnClose" onClick={onToggleMenu}>
        <IconClose />
      </button>
      <div className="mobileMenu">
        <NavLink className="mobileNavlink" to={HOME_ROUTE}>
          Головна
        </NavLink>
        <NavLink className="mobileNavlink" to={`${HOME_ROUTE}#routes`}>
          Маршрути
        </NavLink>
        <NavLink className="mobileNavlink" to={`${HOME_ROUTE}#gallery`}>
          Галерея
        </NavLink>
      </div>
    </StyledMobileMenu>
  );
};
export default Header;
