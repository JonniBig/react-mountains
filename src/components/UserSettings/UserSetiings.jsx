import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { StyledUserSettings } from './UserSettings.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { ReactComponent as UserIcon } from 'assets/images/user.svg';
import { ReactComponent as Close } from 'assets/images/closeModal.svg';
import { nanoid } from '@reduxjs/toolkit';
import { auth, db, storage } from 'auth/base';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { setAuthenticated } from '../../redux/auth/authSlice';

export const UserSetiings = ({ onCloseModal }) => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const [uploadUrl, setUploadUrl] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateUserData = async userObj => {
    if (userObj === null) return;

    const userSnapshot = await getDoc(doc(db, 'users', userObj.uid));

    if (!userSnapshot.exists()) return;

    const userData = userSnapshot.data();

    const serializableUserData = {
      uid: userData.uid,
      email: userData.email,
      displayName: userData.displayName,
      photoURL: userData.photoURL,
    };
    dispatch(setAuthenticated(serializableUserData));
  };

  const formik = useFormik({
    initialValues: {
      userName: user.displayName,
      userAvatarFile: user.photoURL,
    },
    onSubmit: async values => {
      setIsUpdating(true);
      const currentUser = auth.currentUser;
      if (!uploadImage) {
        const serializableUserData = {
          displayName: values.userName,
        };
        // await updateDoc(doc(db, 'users', user.uid), serializableUserData);
        // await updateProfile(currentUser, {
        //   displayName: values.userName,
        // });

        await Promise.all([
          updateDoc(doc(db, 'users', user.uid), serializableUserData),
          updateProfile(currentUser, {
            displayName: values.userName,
          }),
        ]);
        await updateUserData(user);
        onCloseModal();
        setIsUpdating(false);
        return;
      }

      const storageRef = ref(storage, `images/${nanoid(10) + values.userName}`);
      const uploadTask = uploadBytesResumable(storageRef, uploadImage);

      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', null, null, async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            const serializableUserData = {
              photoURL: downloadURL,
              displayName: values.userName,
            };
            await updateDoc(doc(db, 'users', user.uid), serializableUserData);
            await updateProfile(currentUser, {
              photoURL: downloadURL,
              displayName: values.userName,
            });

            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        });
      });

      await updateUserData(user);

      onCloseModal();
      setIsUpdating(false);
    },
  });

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEscapeClick = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscapeClick);

    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <StyledUserSettings onClick={onOverlayClick}>
      <form className="modal" onSubmit={formik.handleSubmit}>
        <button className="closeBtn" type="button" onClick={onCloseModal}>
          <Close className="closeBtn" />
        </button>
        <label className="previewAvatar">
          {user.photoURL ? (
            <img
              className="avatar"
              src={uploadUrl ? uploadUrl : formik.values.userAvatarFile}
              alt={user.displayName}
            />
          ) : (
            <UserIcon />
          )}
          <span className="inputWrapper saveBtn">
            <span>Завантажити аватар</span>
            <input
              type="file"
              name="userAvatarFile"
              onChange={e => {
                const file = e.target.files[0];
                setUploadImage(file);
                setUploadUrl(URL.createObjectURL(file));
                formik.setFieldValue(
                  'userAvatarFile',
                  URL.createObjectURL(file)
                );
              }}
            />
          </span>
        </label>
        <label className="labelInputName">
          <span className="labelSpan">Змінити ім'я</span>
          <input
            type="text"
            name="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
        </label>
        <button type="submit" className="saveBtn" disabled={isUpdating}>
          {isUpdating ? <span className="loader" /> : 'Зберегти'}
        </button>
      </form>
    </StyledUserSettings>
  );
};
