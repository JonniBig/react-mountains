import styled from 'styled-components';
export const StyledScroll = styled.div`
  .scroll {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background-color: rgba(193, 193, 193, 0.6);
    font-size: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .smallCircle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    font-size: 24px;
    opacity: 0;
  }
  .scroll.visible {
    opacity: 1;
  }
  .smallCircle.visible {
    opacity: 1;
  }
`;
