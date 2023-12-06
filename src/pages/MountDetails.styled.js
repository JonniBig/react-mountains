import styled from 'styled-components';
export const StyledMountDetails = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${props => props.$backgroundimg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-top: 100px;
  .innerContent {
    display: flex;
    gap: 30px;
  }
  .titleImg {
    width: 350px;
  }
  .discription {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
