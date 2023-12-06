import ScrollCarousel from 'scroll-carousel-react';
import styled from 'styled-components';

export const StyledGallery = styled.div``;
export const StyledGalleryCarousel = styled(ScrollCarousel)`
  .galleryItem {
    width: 350px;
    background-color: #c0c0c0;
  }
  .galleryItemImg {
    width: 350px;
    object-fit: cover;
  }
`;
