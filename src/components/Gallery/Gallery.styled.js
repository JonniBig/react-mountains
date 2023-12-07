import ScrollCarousel from 'scroll-carousel-react';
import styled from 'styled-components';

export const StyledGallery = styled.div``;
export const StyledGalleryCarousel = styled(ScrollCarousel)`
  height: 262px;
  overflow: hidden;
  .galleryItem {
    width: 350px;
    background-color: #c0c0c0;
  }
  .galleryItemImg {
    width: 350px;
    height: 262px;
    object-fit: cover;
  }
`;
