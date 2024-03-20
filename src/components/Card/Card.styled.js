import styled from 'styled-components';

export const StyledCard = styled.div`
  max-width: 600px;
  max-height: 450px;
  width: 100%;
  min-height: 320px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$backgroundimg});
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.8s;
    z-index: 1;
  }
  &:hover {
    .img {
      background-size: 750px;
      background-position: top center;
      background-repeat: no-repeat;
    }
    .card {
      opacity: 1;
    }
  }

  .card {
    position: relative;
    opacity: 0;
    z-index: 2;
    transition: opacity 1.5s;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    padding: 0 15px 40px 15px;
    margin-top: auto;
    text-align: center;
    color: white;
  }
  .cardTitle {
  }
  .cardDescription {
  }
  .cardLink {
  }
`;
