import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { StyledHeader, StyledMobileMenu } from './Header.styled';
import imgLogo from '../../assets/images/logo-mountain-48.png';
import { ReactComponent as IconClose } from 'assets/images/close.svg';
import { ReactComponent as IconBurger } from 'assets/images/burger.svg';
import {
  ADD_GUEST_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import UserMenu from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import MobileUserMenu from 'components/MobileUserMenu/MobileUserMenu';
import { useMediaQuery } from 'react-responsive';
import { logoutThunk } from '../../redux/auth/authSlice';
import toast from 'react-hot-toast';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSignedIn = useSelector(selectAuthAuthenticated);

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

  return (
    <StyledHeader>
      <div className="container">
        <Link className="logo" to={HOME_ROUTE}>
          <img src={imgLogo} alt="logo" />
        </Link>
        {isMobile && <MobileUserMenu />}

        <ThemeSwitcher />
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
          {location.pathname !== HOME_ROUTE ? (
            <Link className="navlink" to="/#guestRoutes">
              Стежки
            </Link>
          ) : (
            <a onClick={onToggleMenu} className="navlink" href="#guestRoutes">
              Стежки
            </a>
          )}

          {isSignedIn && (
            <NavLink className="navlink" to={ADD_GUEST_ROUTE}>
              Додати
            </NavLink>
          )}
          <UserMenu />
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

  const isSignedIn = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('Ви вийшли з акаунту');
        onToggleMenu();
      });
  };

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
        {location.pathname !== HOME_ROUTE ? (
          <Link className="mobileNavlink" to="/#guestRoutes">
            Стежки
          </Link>
        ) : (
          <a
            onClick={onToggleMenu}
            className="mobileNavlink"
            href="#guestRoutes"
          >
            Стежки
          </a>
        )}
        {isSignedIn && (
          <NavLink className="mobileNavlink" to={ADD_GUEST_ROUTE}>
            Додати
          </NavLink>
        )}
      </div>
      {!isSignedIn && (
        <div className="loginBtn">
          <Link className="mobileNavlink" to={LOGIN_ROUTE}>
            Вхід
          </Link>
          <Link className="mobileNavlink" to={REGISTER_ROUTE}>
            Реєстрація
          </Link>
        </div>
      )}

      {isSignedIn && (
        <div className="loginBtn">
          <button type="button" className="logoutBtn" onClick={onLogout}>
            Вихід
          </button>
        </div>
      )}
    </StyledMobileMenu>
  );
};
export default Header;
