import styled from 'styled-components';
import imgAddBg from 'assets/images/IMG_1883.webp';

export const StyledAddRoute = styled.div`
  padding-top: 70px;
  min-height: calc(100vh - var(--footer-height));
  background-image: var(--hero-section-gradient), url(${imgAddBg});
  position: relative;
  filter: ${props =>
    props.$theme === 'light' ? 'grayscale(0)' : 'grayscale(1)'};
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 30px 20px;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: calc(100% - 100px);
    max-height: 100%;
  }
  .labelSection {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .addRouteBtn {
    margin-top: auto;
    /* margin-bottom: 30px; */
  }
`;
