import styled from 'styled-components';

export const StyledCard = styled.div`
  max-width: 500px;
  max-height: 450px;
  /* min-width: 320px; */
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
    /* min-width: 320px;
    min-height: 320px; */
    background-image: url(${props => props.backgroundimg});
    background-size: 570px;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.3s;
    z-index: 1;
  }
  &:hover {
    .img {
      background-size: 750px;
      background-position: left center;
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
    transition: opacity 0.3s;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.8)
    );
    padding: 15px;
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
