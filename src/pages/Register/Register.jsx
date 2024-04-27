import React from 'react';
import { StyledRegisterPage } from './Register.styled';
import Section from 'components/Section/Section';
import { useForm } from 'react-hook-form';

import { ReactComponent as IconGoogle } from 'assets/images/socialMedia/google.svg';
import { ReactComponent as IconApple } from 'assets/images/socialMedia/apple.svg';
import { ReactComponent as IconGit } from 'assets/images/socialMedia/git.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerThunk,
  registerThunkWithGithub,
  registerThunkWithGoogle,
} from '../../redux/auth/authSlice';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { errorHandler } from 'constants/errorCodes';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);

  const onSubmit = async data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        toast.success('Реєстрація пройшла успішно!');
      })
      .catch(errorHandler);
  };

  const onGoogleLogin = async () => {
    dispatch(registerThunkWithGoogle())
      .unwrap()
      .then(() => {
        toast.success('Реєстрація пройшла успішно!');
      })
      .catch(errorHandler);
  };

  const onGithubLogin = async () => {
    dispatch(registerThunkWithGithub())
      .unwrap()
      .then(() => {
        toast.success('Реєстрація пройшла успішно!');
      })
      .catch(errorHandler);
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
            {errors.name && (
              <span className="formErr">This field is required</span>
            )}
          </label>
          <label className="formLabel">
            <input
              placeholder="Пошта"
              className="labelInput"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="formErr">This field is required</span>
            )}
          </label>
          <label className="formLabel">
            <input
              placeholder="Пароль"
              className="labelInput"
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="formErr">This field is required</span>
            )}
          </label>
          <button className="formSubmitBtn" type="submit" disabled={isLoading}>
            {isLoading ? <span className="loader" /> : 'Зареєструватися'}
          </button>
          <div className="socialBtnContainer">
            <button
              className="socialLogin"
              type="button"
              onClick={onGoogleLogin}
              disabled={isLoading}
            >
              <IconGoogle />
            </button>

            <button className="socialLogin" type="button" disabled={isLoading}>
              <IconApple />
            </button>
            <button
              className="socialLogin"
              type="button"
              onClick={onGithubLogin}
              disabled={isLoading}
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
