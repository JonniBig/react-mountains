import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { StyledHeader, StyledMobileMenu } from './Header.styled';
import imgLogo from '../../assets/images/logo-mountain-48.png';
import { ReactComponent as IconClose } from 'assets/images/close.svg';
import { ReactComponent as IconBurger } from 'assets/images/burger.svg';
import { HOME_ROUTE } from 'constants/routes';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'auth/base';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const onToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const onGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('result: ', result);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <StyledHeader>
      <div className="container">
        <Link className="logo" to={HOME_ROUTE}>
          <img src={imgLogo} alt="logo" />
        </Link>
        <ThemeSwitcher />
        <button type="button" onClick={onGoogleLogin}>
          Login with Google
        </button>
        <nav className="navigation">
          <NavLink className="navlink" to={HOME_ROUTE}>
            Головна
          </NavLink>
          {location.pathname !== HOME_ROUTE ? (
            <Link className="navlink" to="/#routes">
              Маршрути
            </Link>
          ) : (
            <a className="navlink" href="#routes">
              Маршрути
            </a>
          )}
          {location.pathname !== HOME_ROUTE ? (
            <Link className="navlink" to="/#gallery">
              Галерея
            </Link>
          ) : (
            <a className="navlink" href="#gallery">
              Галерея
            </a>
          )}
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
  const location = useLocation();

  return (
    <StyledMobileMenu className={isOpen ? 'open' : ''}>
      <button type="button" className="btnClose" onClick={onToggleMenu}>
        <IconClose />
      </button>
      <div className="mobileMenu">
        <NavLink className="mobileNavlink" to={HOME_ROUTE}>
          Головна
        </NavLink>
        {location.pathname !== HOME_ROUTE ? (
          <Link className="mobileNavlink" to="/#gallery">
            Галерея
          </Link>
        ) : (
          <a onClick={onToggleMenu} className="mobileNavlink" href="#gallery">
            Галерея
          </a>
        )}
        {location.pathname !== HOME_ROUTE ? (
          <Link className="mobileNavlink" to="/#routes">
            Маршрути
          </Link>
        ) : (
          <a onClick={onToggleMenu} className="mobileNavlink" href="#routes">
            Маршрути
          </a>
        )}
      </div>
    </StyledMobileMenu>
  );
};
export default Header;
