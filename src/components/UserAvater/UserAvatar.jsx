import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthAuthenticated,
  selectAuthUser,
} from '../../redux/auth/authSelectors';
import { ReactComponent as UserIcon } from 'assets/images/user.svg';
import { StyledUserAvatar } from './UserAvatar.styled';

const UserAvatar = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthUser);
  const [isLoadedImg, setIsLoadedImg] = useState(false);
  return authenticated && user.photoURL ? (
    <>
      <StyledUserAvatar
        onLoad={() => setIsLoadedImg(true)}
        className={`userAvatar ${isLoadedImg ? 'loaded' : ''}`}
        src={user.photoURL}
        alt={user.displayName}
      />
      {!isLoadedImg && <UserIcon />}
    </>
  ) : (
    <UserIcon />
  );
};

export default UserAvatar;
