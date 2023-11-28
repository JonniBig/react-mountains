import React from 'react';
import { StyledCard } from './Card.styled';
import { Link } from 'react-router-dom';

const Card = ({ title, thumbs, description }) => {
  return (
    <StyledCard backgroundImg={thumbs[0]}>
      <div class="img"></div>
      <div class="card">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
        <Link className="cardLink" to={`/mountain/${title}`}>
          Детальніше
        </Link>
      </div>
    </StyledCard>
  );
};

export default Card;
