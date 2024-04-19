import React, { useState } from 'react';
import { StyledUserMenu } from './UserMenu.styled';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import { ReactComponent as UserIcon } from 'assets/images/user.svg';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StyledUserMenu>
      <button className="userMenu" type="button" onClick={onToggleMenu}>
        <UserIcon />
      </button>
      {isMenuOpen && (
        <div className="menu">
          <Link to={LOGIN_ROUTE}>Вхід</Link>
          <Link to={REGISTER_ROUTE}>Реєстрація</Link>
        </div>
      )}
    </StyledUserMenu>
  );
};

export default UserMenu;
