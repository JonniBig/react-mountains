import Section from 'components/Section/Section';
import styled from 'styled-components';
import imgHero from 'assets/images/IMG_2601.webp';
export const StyledGallerySection = styled(Section)``;

export const StyledCardSection = styled(Section)`
  .cardContainer {
    display: grid;
    gap: 25px;

    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
`;

export const StyledHeroSection = styled(Section)`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${imgHero});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;
