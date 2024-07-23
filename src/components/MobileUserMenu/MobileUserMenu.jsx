import React, { useState } from 'react';
import { StyledMobileUserMenu } from './MobileUserMenu.styled';
import UserAvatar from 'components/UserAvater/UserAvatar';
import { UserSetiings } from 'components/UserSettings/UserSetiings';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routes';

const MobileUserMenu = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <StyledMobileUserMenu
        onClick={authenticated ? onOpenModal : redirectToLogin}
      >
        <UserAvatar />
      </StyledMobileUserMenu>
      {isModalOpen && <UserSetiings onCloseModal={onCloseModal} />}
    </>
  );
};

export default MobileUserMenu;
