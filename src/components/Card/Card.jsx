import React from 'react';
import { StyledCard } from './Card.styled';

import { MOUNTAIN_ROUTE } from 'constants/routes';

const Card = ({ id, title, thumbs, description }) => {
  return (
    <StyledCard to={`${MOUNTAIN_ROUTE}/${id}`} $backgroundimg={thumbs}>
      <div className="img" />

      <div className="card">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
