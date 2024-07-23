import React, { useEffect, useRef, useState } from 'react';
import { StyledUserMenu } from './UserMenu.styled';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { logoutThunk } from '../../redux/auth/authSlice';
import toast from 'react-hot-toast';
import { UserSetiings } from 'components/UserSettings/UserSetiings';
import UserAvatar from 'components/UserAvater/UserAvatar';

const UserMenu = () => {
  const location = useLocation();

  const authenticated = useSelector(selectAuthAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const menuRef = useRef();
  const toggleBtnRef = useRef();

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleBackdropClick = e => {
      if (e.target.closest('.userMenu') === toggleBtnRef.current) {
        return;
      }

      if (e.target.closest('.menu') !== menuRef.current) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('click', handleBackdropClick);
    };
  }, [isMenuOpen]);
  const onLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('Ви вийшли з акаунту');
      });
  };

  return (
    <StyledUserMenu>
      <button
        ref={toggleBtnRef}
        className="userMenu"
        type="button"
        onClick={onToggleMenu}
      >
        <UserAvatar />
      </button>
      {isMenuOpen &&
        (authenticated ? (
          <div className="menu" ref={menuRef}>
            <button type="button" className="logoutBtn" onClick={onOpenModal}>
              Налаштування
            </button>
            <button type="button" className="logoutBtn" onClick={onLogout}>
              Вихід
            </button>
          </div>
        ) : (
          <div className="menu" ref={menuRef}>
            <Link to={LOGIN_ROUTE}>Вхід</Link>
            <Link to={REGISTER_ROUTE}>Реєстрація</Link>
          </div>
        ))}
      {isModalOpen && <UserSetiings onCloseModal={onCloseModal} />}
    </StyledUserMenu>
  );
};

export default UserMenu;
