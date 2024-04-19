import Section from 'components/Section/Section';
import styled from 'styled-components';
import imgHero from 'assets/images/IMG_2601.webp';

export const StyledCardSection = styled(Section)`
  background-image: var(--primary-background-color-lightgrey);

  .cardContainer {
    display: grid;
    gap: 56px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 380px));
    margin-top: 60px;
  }
  .text {
    font-size: 18px;
    line-height: 1.5em;
    text-align: center;
  }
  .swiper {
    padding-bottom: 20px;
    padding-top: 60px;
  }
`;

export const StyledHeroSection = styled(Section)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  background-image: var(--hero-section-gradient), url(${imgHero});
  filter: ${props =>
    props.$theme === 'light' ? 'grayscale(0)' : 'grayscale(1)'};
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Amatic SC', sans-serif;
`;

export const StyledWelcomeSection = styled(Section)`
  background-image: var(--primary-background-color-lightgrey);

  .text {
    font-size: 18px;
    line-height: 1.5em;
    text-align: center;
  }
`;

export const StyledGallerySection = styled(Section)`
  background-image: var(--primary-background-color-blue);

  .text {
    color: var(--color-text-gallery);
    font-size: 18px;
    line-height: 1.5em;
    margin-bottom: 60px;
    text-align: center;
  }
`;
