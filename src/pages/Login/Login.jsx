import { errorHandler } from 'constants/errorCodes';
import React from 'react';
import toast from 'react-hot-toast';
import { ReactComponent as IconGoogle } from 'assets/images/socialMedia/google.svg';
import { ReactComponent as IconGit } from 'assets/images/socialMedia/git.svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  loginThunk,
  registerThunkWithGithub,
  registerThunkWithGoogle,
} from '../../redux/auth/authSlice';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import { useForm } from 'react-hook-form';
import Section from 'components/Section/Section';
import { StyledRegisterPage } from 'pages/Register/Register.styled';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const onSubmit = async data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        toast.success('Авториація пройшла успішно!');
      })
      .catch(errorHandler);
  };
  const onGoogleLogin = async () => {
    dispatch(registerThunkWithGoogle())
      .unwrap()
      .then(() => {
        toast.success('Авториація пройшла успішно!');
      })
      .catch(errorHandler);
  };

  const onGithubLogin = async () => {
    dispatch(registerThunkWithGithub())
      .unwrap()
      .then(() => {
        toast.success('Авториація пройшла успішно!');
      })
      .catch(errorHandler);
  };
  return (
    <StyledRegisterPage>
      <Section title="Вхід">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            {isLoading ? <span className="loader" /> : 'Увійти'}
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

export default Login;
