import React, { forwardRef } from 'react';
import { StyledSection } from './Section.styled';

const Section = forwardRef(
  ({ title, children, className, ...restProps }, ref) => {
    return (
      <StyledSection ref={ref} className={className} {...restProps}>
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
  }
);

export default Section;
