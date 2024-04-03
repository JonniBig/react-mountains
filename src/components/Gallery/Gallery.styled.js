import ScrollCarousel from 'scroll-carousel-react';
import styled from 'styled-components';

export const StyledGallery = styled.div``;
export const StyledGalleryCarousel = styled(ScrollCarousel)`
  height: 262px;
  overflow: hidden;
  background-color: var(--primary-background-color-blue);
  .galleryItem {
    width: 350px;
    background-color: var(--primary-background-color-grey);
  }
  .galleryItemImg {
    width: 350px;
    height: 262px;
    object-fit: cover;
  }
`;
