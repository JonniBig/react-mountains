import React from 'react';
import { StyledCard } from './Card.styled';

import { GUEST_ROUTE, MOUNTAIN_ROUTE } from 'constants/routes';

const Card = ({ id, title, thumbs, description, isGuestRoute }) => {
  return (
    <StyledCard
      to={isGuestRoute ? `${GUEST_ROUTE}/${id}` : `${MOUNTAIN_ROUTE}/${id}`}
      $backgroundimg={thumbs}
    >
      <div className="img" />

      <div className="card">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
