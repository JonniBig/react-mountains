import styled from 'styled-components';
import imgMobMenu from 'assets/images/mobileMenu/mountain.png';

export const StyledHeader = styled.header`
  background-color: var(--primary-background-color-transparent);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  min-height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 4;
  top: 0;
  width: 100%;
  color: var();
  .container {
    display: flex;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
  }
  .navigation {
    display: none;
    gap: 20px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .navigation {
      display: flex;
    }
  }

  .navlink {
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;
  }
  .navlink:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .btnBurger {
    background-color: transparent;
    border: none;
    padding: 12px;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .btnBurger {
      display: flex;
    }
  }
`;

export const StyledMobileMenu = styled.div`
  background-image: url(${imgMobMenu}), var(--mobile-menu-background-color);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  min-height: 100vh;
  padding: 24px 15px;
  transform: translateX(110%);
  transition: all 0.3s;
  &.open {
    transform: translateX(0);
  }
  .btnClose {
    position: absolute;
    top: 2px;
    right: 12px;
    background-color: transparent;
    border: none;
    padding: 12px;
  }
  .mobileMenu {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .mobileNavlink {
    padding: 12px 8px;
    color: var(--primary-color);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: rgb(136 138 136 / 57%) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px;

    width: 200px;
    text-align: center;
  }
  .mobileNavlink:hover {
    box-shadow: rgb(136 138 136 / 57%) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
