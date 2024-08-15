import styled from 'styled-components';
import imgAddBg from 'assets/images/IMG_1883.webp';

export const StyledAddRoute = styled.div`
  padding-top: 70px;
  padding-bottom: 10px;
  min-height: calc(100vh - var(--footer-height));
  background-image: var(--hero-section-gradient), url(${imgAddBg});
  filter: ${props =>
    props.$theme === 'light' ? 'grayscale(0)' : 'grayscale(1)'};
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  .custom-file-upload-input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .custom-file-upload span {
    font-weight: 600;
    z-index: 1;
  }

  .error {
    color: red;
  }
  .title {
    font-weight: 900;
    font-size: 36px;
    margin-bottom: 50px;
  }
  .labelSpan {
    font-size: 18px;
    font-weight: 700;
  }
  .form {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 100px);
    max-height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    gap: 30px;
    padding: 30px 12px;
    background-color: ${props =>
      props.$theme === 'light'
        ? 'rgba(255, 255, 255, 0.2)'
        : 'rgba(0, 0, 0, 0.2)'};
    border-radius: 8px;
    box-shadow: ${props =>
      props.$theme === 'light'
        ? '0 4px 8px rgba(0, 0, 0, 0.1)'
        : '0 4px 8px rgba(0, 0, 0, 0.3)'};
  }

  input[type='text'] {
    width: 100%;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.5);
  }

  input[type='text']:focus {
    border-color: #4caf50;
    outline: none;
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  .labelSection {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
  }
  .labelInput {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
  }
  .labelInputShort {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
  }
  .photoCardLable {
    margin-top: -38px;
  }
  .labelBtn {
    display: flex;
    overflow: hidden;
  }
  .shortDescription {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .addRouteBtn {
    max-width: 137px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: black 1px solid;
    background-color: transparent;
    padding: 12px 8px;
    color: var(--primary-color);
    letter-spacing: 0.025em;
    font-weight: 600;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
  }
  .addRouteBtn:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  .loader {
    width: 12px;
    height: 8px;
    display: block;
    margin: auto;
    position: relative;
    border-radius: 4px;
    color: #000;
    background: currentColor;
    box-sizing: border-box;
    animation: animloader 0.6s 0.3s ease infinite alternate;
  }
  .loader::after,
  .loader::before {
    content: '';
    box-sizing: border-box;
    width: 12px;
    height: 8px;
    background: currentColor;
    position: absolute;
    border-radius: 4px;
    top: 0;
    right: 110%;
    animation: animloader 0.6s ease infinite alternate;
  }
  .loader::after {
    left: 110%;
    right: auto;
    animation-delay: 0.6s;
  }

  @keyframes animloader {
    0% {
      width: 12px;
    }
    100% {
      width: 30px;
    }
  }

  .fileInputWrapper {
    position: relative;
    display: inline-block;
    max-width: 177px;
  }

  .fileInputWrapper input[type='file'] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .fileInputButton {
    position: relative;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    gap: 4px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
  }
  .fileInputButton:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  @media (max-width: 576px) {
    .mobileFileInputButton {
      display: none;
    }
    .labelBtn {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .labelInputShort,
    .fileInputButton {
      margin: 0 auto;
    }
  }

  /* @media (max-width: 768px) {
   
  } */

  textarea {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.5;
    resize: vertical;
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.5);
  }

  textarea:focus {
    border-color: #4caf50;
    outline: none;
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  .miniGallery {
    display: flex;
    flex-grow: 1;
    gap: 12px;
    align-items: center;
    margin-left: 30px;
    overflow-x: auto;
  }
  .miniGalleryItem {
    position: relative;
    width: 100%;
    min-width: 200px;
    max-width: 200px;
    height: 100px;
  }
  .miniGalleryImg {
    max-width: 200px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .photoCardImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .imagePreviewContainer {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .deleteImgBtn {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: var(--semi-transparent-black-bg);

    border: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .deleteImgIcon {
    color: var(--primary-color-card);
    width: 28px;
    height: 28px;
  }
`;
