import Section from 'components/Section/Section';
import styled from 'styled-components';
import imgHero from 'assets/images/IMG_2601.webp';
export const StyledGallerySection = styled(Section)``;

export const StyledCardSection = styled(Section)`
  .cardContainer {
    display: grid;
    gap: 56px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 600px));
    margin-top: 60px;
  }
  .text {
    font-size: 18px;
    line-height: 1.5em;
  }
`;

export const StyledHeroSection = styled(Section)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: xx-large;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${imgHero});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledWelcomeSection = styled(Section)`
  .text {
    font-size: 18px;
    line-height: 1.5em;
  }
`;
