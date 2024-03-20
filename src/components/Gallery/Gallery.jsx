import React from 'react';
import { StyledGallery, StyledGalleryCarousel } from './Gallery.styled';

// import ScrollCarousel from 'scroll-carousel-react';
import { mountains } from 'db/data';
const Gallery = () => {
  return (
    <StyledGallery>
      <StyledGalleryCarousel autoplaySpeed={2} speed={8}>
        {mountains.map(mount => (
          <div key={mount.mountainName} className="galleryItem">
            <img
              className="galleryItemImg"
              src={mount.thumbs[0]}
              alt={mount.mountainName}
            />
          </div>
        ))}
      </StyledGalleryCarousel>
    </StyledGallery>
  );
};

export default Gallery;
