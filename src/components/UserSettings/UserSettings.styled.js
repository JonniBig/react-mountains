import styled from 'styled-components';

export const StyledUserSettings = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  .previewAvatar {
    display: flex;
    align-items: center;
  }
  .inputWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: none;
  }
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 32px 12px;
    z-index: 100;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
  }
  input[type='file'] {
    display: none;
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
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

  .saveBtn {
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    border: none;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;

    text-align: center;
  }
  .saveBtn:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
