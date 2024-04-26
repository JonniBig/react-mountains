import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  position: relative;
  .menu {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 120px;
    gap: 15px;
    background-color: #fff;
    padding: 15px;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
    border-radius: 4px;
    animation-name: fadeIn;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
    transform-origin: top;
  }
  @keyframes fadeIn {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .userAvatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    text-align: left;
  }

  .logoutBtn {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  .userMenu {
    background-color: transparent;
    border-radius: 4px;
    border: none;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: all 0.3s;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .userMenu:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
