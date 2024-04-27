import styled from 'styled-components';
import imgRegBg from 'assets/images/IMG_4042.webp';

export const StyledRegisterPage = styled.div`
  padding-top: 70px;
  min-height: calc(100vh - var(--footer-height));
  background-image: url(${imgRegBg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .labelInput {
    border: none;
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
  }

  .formLabel {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .formErr {
    position: absolute;
    bottom: -20px;
    font-size: 12px;
  }

  .socialBtnContainer {
    display: flex;
    gap: 12px;
  }
  .socialLogin {
    background-color: transparent;
    border: none;
  }
  .formSubmitBtn {
    max-width: 137px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    padding: 12px 8px;
    color: var(--primary-color);
    letter-spacing: 0.025em;
    font-weight: 600;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(255 246 246 / 51%) 6px 2px 16px 0px,
      rgb(198 198 198 / 93%) -6px -2px 16px 0px;
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
`;
