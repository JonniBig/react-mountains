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

    filter: drop-shadow(0px 0px 2px var(--primary-background-color-grey));
    &:hover,
    &:focus {
      filter: drop-shadow(0px 0px 2px #3f3d3d);
    }
  }
`;
