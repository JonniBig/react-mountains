import React from 'react';
import { StyledSection } from './Section.styled';

const Section = ({ title, children, className }) => {
  return (
    <StyledSection className={className}>
      <div className="container">
        {title && (
          <div className="title-container">
            <h2 className="title">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </StyledSection>
  );
};

export default Section;
