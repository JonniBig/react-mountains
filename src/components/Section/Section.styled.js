import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0 70px;
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 12px;
  }
  .title-container {
    min-height: 105px;
    max-width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    @media (max-width: 576px) {
      min-height: 205px;
    }
  }
  .title {
    font-size: 36px;
    font-weight: 900;
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
