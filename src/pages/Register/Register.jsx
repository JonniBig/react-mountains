import React from 'react';
import { StyledRegisterPage } from './Register.styled';
import Section from 'components/Section/Section';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'auth/base';
import { useForm } from 'react-hook-form';

import { ReactComponent as IconFacebook } from 'assets/images/socialMedia/facebook.svg';
import { ReactComponent as IconGoogle } from 'assets/images/socialMedia/google.svg';
import { ReactComponent as IconApple } from 'assets/images/socialMedia/apple.svg';
import { ReactComponent as IconGit } from 'assets/images/socialMedia/git.svg';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('result: ', result);
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
            {/* <span className="labelText">Пошта</span> */}
            <input
              placeholder="Пошта"
              className="labelInput"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </label>
          <label className="formLabel">
            {/* <span className="labelText">Пароль</span> */}
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
              <IconFacebook />
            </button>
            <button className="socialLogin" type="button">
              <IconApple />
            </button>
            <button className="socialLogin" type="button">
              <IconGit />
            </button>
          </div>
        </form>
      </Section>
    </StyledRegisterPage>
  );
};

export default Register;
