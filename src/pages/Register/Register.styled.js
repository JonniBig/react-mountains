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
    gap: 20px;
  }

  .labelInput {
    margin-left: 15px;
    border: none;
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
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
    border: none;
    background-color: transparent;
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(255 246 246 / 51%) 6px 2px 16px 0px,
      rgb(198 198 198 / 93%) -6px -2px 16px 0px;
  }
`;
