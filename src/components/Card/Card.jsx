import React from 'react';
import { StyledCard } from './Card.styled';
import { Link } from 'react-router-dom';

const Card = ({ title, thumbs, description }) => {
  return (
    <StyledCard backgroundimg={thumbs[0]}>
      <div className="img"></div>
      <div className="card">
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
