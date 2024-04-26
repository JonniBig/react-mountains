import React from 'react';
import { StyledRegisterPage } from './Register.styled';
import Section from 'components/Section/Section';
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'auth/base';
import { useForm } from 'react-hook-form';

import { ReactComponent as IconGoogle } from 'assets/images/socialMedia/google.svg';
import { ReactComponent as IconApple } from 'assets/images/socialMedia/apple.svg';
import { ReactComponent as IconGit } from 'assets/images/socialMedia/git.svg';
import { useDispatch } from 'react-redux';
import { registerThunkWithGoogle } from '../../redux/auth/authSlice';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async data => {
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = response.user;
    const serializableUserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    console.log('serializableUserData: ', serializableUserData);
  };

  const onGoogleLogin = async () => {
    dispatch(registerThunkWithGoogle());
  };

  const onGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('result: ', result.user);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <StyledRegisterPage>
      <Section title="Реєстрація">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label className="formLabel">
            <input
              placeholder="Ім'я"
              className="labelInput"
              type="text"
              {...register('name', { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </label>
          <label className="formLabel">
            <input
              placeholder="Пошта"
              className="labelInput"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </label>
          <label className="formLabel">
            <input
              placeholder="Пароль"
              className="labelInput"
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </label>
          <button className="formSubmitBtn" type="submit">
            Зареєструватися
          </button>
          <div className="socialBtnContainer">
            <button
              className="socialLogin"
              type="button"
              onClick={onGoogleLogin}
            >
              <IconGoogle />
            </button>

            <button className="socialLogin" type="button">
              <IconApple />
            </button>
            <button
              className="socialLogin"
              type="button"
              onClick={onGithubLogin}
            >
              <IconGit />
            </button>
          </div>
        </form>
      </Section>
    </StyledRegisterPage>
  );
};

export default Register;
