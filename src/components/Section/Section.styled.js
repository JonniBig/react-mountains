import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 70px 0;
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 12px;
  }
  .title-container {
    min-height: 50px;
    max-width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
  }
  .title {
    font-size: xx-large;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);

    transition: text-shadow 0.3s, font-size 0.3s, transform 0.3s;
  }
  .title:hover {
    text-shadow: 0 0 20px rgba(70, 115, 57, 1);
    transform: translate(-50%, -50%) scale(1.1);
    transform-origin: center;
  }
`;
