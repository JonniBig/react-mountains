import React from 'react';
import { StyledCard } from './Card.styled';
import { Link } from 'react-router-dom';
import { MOUNTAIN_ROUTE } from 'constants/routes';

const Card = ({ title, thumbs, description }) => {
  return (
    <StyledCard backgroundimg={thumbs[0]}>
      <div className="img"></div>
      <Link to={`${MOUNTAIN_ROUTE}/${title}`}>
        <div className="card">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDescription">{description}</p>
        </div>
      </Link>
    </StyledCard>
  );
};

export default Card;
