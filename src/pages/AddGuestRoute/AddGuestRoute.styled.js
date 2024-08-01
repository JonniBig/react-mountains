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

  .title {
    font-weight: 700;
  }
  .form {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 30px 20px;
    height: calc(100% - 100px);
    max-height: 100%;
    max-width: 1280px;
    margin: 0 auto;
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

  input[type='file'] {
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

  input[type='file']:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .labelSection {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 80px;
    width: 100%;
  }
  .shortDescription {
    display: flex;
    flex-direction: row;
    gap: 30px;
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
    /* overflow: hidden; */
    display: inline-block;
  }

  .fileInputWrapper input[type='file'] {
    /* font-size: 100px; */
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .fileInputButton {
    max-width: 177px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    padding: 12px 8px;
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
`;
