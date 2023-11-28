import React from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <p>
          Насолоджуйтеся захопливими фотографіями з наших незабутніх гірських
          походів.
        </p>
        <p>© 2023 Походи в гори. Усі права захищені.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
