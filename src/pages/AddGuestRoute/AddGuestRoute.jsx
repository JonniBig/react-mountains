import React, { useContext, useState } from 'react';
import { StyledAddRoute } from './AddGuestRoute.styled';
import { themeContext } from 'context/ThemeContext';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { nanoid } from '@reduxjs/toolkit';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from 'auth/base';
import { addDoc, collection } from 'firebase/firestore';
import { uploadFiles } from 'utils/uploadFiles';
import { ReactComponent as UploadIcon } from 'assets/images/upload.svg';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GUEST_ROUTE } from 'constants/routes';

const validationSchema = Yup.object().shape({
  routeName: Yup.string().required("Назва маршруту є обов'язковою"),
  shortDescription: Yup.string()
    .required("Короткий опис є обов'язковим")
    .min(60, 'Довжина має бути більше 60 символів')
    .max(120, 'Довжина має бути менше 120 символів'),
  photoCardImg: Yup.mixed()
    .required("Фотокартка є обов'язковою")
    .test(
      'fileSize',
      'Розмір файлу має бути менше 5MB',
      value => value && value.size <= 5242880
    )
    .test(
      'fileType',
      'Файл має бути у форматі jpeg, webp або png',
      value =>
        value && ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
    ),
  backgroundImg: Yup.mixed()
    .required("Фонове зображення є обов'язковим")
    .test(
      'fileSize',
      'Розмір файлу має бути менше 5MB',
      value => value && value.size <= 5242880
    )
    .test(
      'fileType',
      'Файл має бути у форматі jpeg, webp або png',
      value =>
        value && ['image/jpeg', 'image/png', 'image/webp'].includes(value.type)
    ),
  mainDescription: Yup.string().required("Основний опис є обов'язковим"),
  gallery: Yup.mixed()
    .required("Галерея є обов'язковою")
    .test('fileSize', 'Розмір кожного файлу має бути менше 5MB', value =>
      Array.from(value).every(file => file.size <= 5242880)
    )
    .test(
      'fileType',
      'Всі файли мають бути у форматі jpeg, webp або png',
      value =>
        Array.from(value).every(file =>
          ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)
        )
    ),
});

const AddGuestRoute = () => {
  const { theme } = useContext(themeContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = async formData => {
    setIsSubmitting(true);
    const backgroundImg = formData.backgroundImg;
    const photoCardImg = formData.photoCardImg;
    const gallery = formData.gallery;
    const mainDescription = formData.mainDescription;
    const routeName = formData.routeName;
    const shortDescription = formData.shortDescription;
    try {
      const storageRefBgImage = ref(
        storage,
        `images/${nanoid(10) + backgroundImg.name}`
      );
      const uploadTaskBgImage = uploadBytesResumable(
        storageRefBgImage,
        backgroundImg
      );

      const backgroundImgDownloadURL = await new Promise((resolve, reject) => {
        uploadTaskBgImage.on('state_changed', null, null, async () => {
          try {
            const downloadURL = await getDownloadURL(
              uploadTaskBgImage.snapshot.ref
            );

            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        });
      });

      const storageRefCardIMg = ref(
        storage,
        `images/${nanoid(10) + photoCardImg.name}`
      );
      const uploadTaskCardImg = uploadBytesResumable(
        storageRefCardIMg,
        photoCardImg
      );

      const photoCardImgDownloadURL = await new Promise((resolve, reject) => {
        uploadTaskCardImg.on('state_changed', null, null, async () => {
          try {
            const downloadURL = await getDownloadURL(
              uploadTaskCardImg.snapshot.ref
            );

            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        });
      });

      const galleryImgs = await uploadFiles(gallery);

      const finalRouteData = {
        routeName,
        shortDescription,
        mainDescription,
        backgroundImg: backgroundImgDownloadURL,
        photoCardImg: photoCardImgDownloadURL,
        gallery: galleryImgs,
        userUid: user.uid,
        publicationDate: new Date().toISOString().slice(0, 10),
      };

      await addDoc(collection(db, 'guestRoutes'), finalRouteData);
      toast.success('Маршрут додано успішно!');
      navigate(`${GUEST_ROUTE}/${routeName}`);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledAddRoute $theme={theme}>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <h2 className="title">Додай свій маршрут</h2>
        <div className="labelSection">
          <label>
            <div className="labelInput">
              <span className="labelSpan">Назва маршруту (гори)</span>
              <input
                type="text"
                {...register('routeName')}
                id="routeName"
                maxLength="30"
              />
              {errors.routeName && (
                <p className="error">{errors.routeName.message}</p>
              )}
            </div>
          </label>
          <label className="shortDescription">
            <div className="labelInput">
              <span className="labelSpan">
                Короткий опис маршруту та фотокартка
              </span>
              <input
                type="text"
                {...register('shortDescription')}
                id="shortDescription"
              />
            </div>
            {errors.shortDescription && (
              <p className="error">{errors.shortDescription.message}</p>
            )}
          </label>
          <label className="labelBtn">
            <div className="labelInputShort">
              <Controller
                control={control}
                name={'photoCardImg'}
                render={({ field: { value, onChange, ...field } }) => (
                  <div className="fileInputWrapper">
                    <button type="button" className="fileInputButton">
                      <input
                        {...field}
                        onChange={event => onChange(event.target.files[0])}
                        type="file"
                      />
                      Вибрати файл
                      <UploadIcon />
                    </button>
                    {errors.photoCardImg && (
                      <p className="error">{errors.photoCardImg.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </label>
          <label className="labelBtn">
            <div className="labelInput">
              <span className="labelSpan">Фонове зображення</span>
              <Controller
                control={control}
                name={'backgroundImg'}
                render={({ field: { value, onChange, ...field } }) => (
                  <div className="fileInputWrapper">
                    <button type="button" className="fileInputButton">
                      <input
                        {...field}
                        onChange={event => onChange(event.target.files[0])}
                        type="file"
                      />
                      Вибрати файл
                      <UploadIcon />
                    </button>
                    {errors.backgroundImg && (
                      <p className="error">{errors.backgroundImg.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </label>
          <label>
            <div className="labelInput">
              <span className="labelSpan">Основний опис маршруту</span>
              <textarea
                type="text"
                {...register('mainDescription')}
                id="mainDescription"
                rows="6"
              />

              {errors.mainDescription && (
                <p className="error">{errors.mainDescription.message}</p>
              )}
            </div>
          </label>
          <label className="labelBtn">
            <div className="labelInput">
              <span className="labelSpan">Галерея</span>
              <Controller
                control={control}
                name={'gallery'}
                render={({ field: { value, onChange, ...field } }) => (
                  <div className="fileInputWrapper">
                    <button type="button" className="fileInputButton">
                      <input
                        {...field}
                        onChange={event => onChange(event.target.files)}
                        type="file"
                        multiple
                      />
                      Вибрати файли
                      <UploadIcon />
                    </button>
                    {errors.gallery && (
                      <p className="error">{errors.gallery.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </label>
        </div>
        <button disabled={isSubmitting} type="submit" className="addRouteBtn">
          {isSubmitting ? <span className="loader" /> : 'Опублікувати'}
        </button>
      </form>
    </StyledAddRoute>
  );
};

export default AddGuestRoute;
