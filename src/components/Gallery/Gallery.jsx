import React from 'react';
import { StyledGallery, StyledGalleryCarousel } from './Gallery.styled';
import * as prismicH from '@prismicio/helpers';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

const Gallery = () => {
  const [documents] = useAllPrismicDocumentsByType('mountain-routes');

  const cards = documents?.map(doc => doc.data.mountain_card?.[0]) ?? [];

  if (cards.length === 0) return null;
  return (
    <StyledGallery>
      <StyledGalleryCarousel autoplaySpeed={2} speed={8}>
        {cards.map(mount => {
          const title = prismicH.asText(mount.card_title);
          const thumb = mount.card_img.url;
          return (
            <div key={title} className="galleryItem">
              <img className="galleryItemImg" src={thumb} alt={title} />
            </div>
          );
        })}
      </StyledGalleryCarousel>
    </StyledGallery>
  );
};

export default Gallery;
