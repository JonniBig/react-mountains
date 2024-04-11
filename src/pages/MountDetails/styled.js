import styled from 'styled-components';
export const StyledMountDetails = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${props => props.$backgroundimg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-top: 30px;
  .gallery {
    padding: 70px 20px;
  }
  .innerContent {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 35px;
  }
  .titleImg {
    width: 350px;
  }
  .title {
    font-weight: 700;
  }
  .discription {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .image-gallery {
    max-width: 900px;
    margin: 0 auto;
  }
  .image-gallery-thumbnail .image-gallery-thumbnail-image {
    width: 100%;
    height: 100%;
    max-height: 57px;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (min-width: 768px) {
    .image-gallery-thumbnail-image {
      max-height: 69px;
    }
  }
  .image-gallery-thumbnail {
    height: 68px;
    overflow: hidden;
  }
`;
