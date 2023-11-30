import styled from 'styled-components';
export const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  min-height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
  }
  .navigation {
    display: flex;
    gap: 20px;
  }
  .navlink {
    padding: 12px 8px;
    color: currentColor;
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
`;
