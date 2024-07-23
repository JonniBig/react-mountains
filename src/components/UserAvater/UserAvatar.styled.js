import styled from 'styled-components';

export const StyledUserAvatar = styled.img`
  &.userAvatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    text-align: left;
    position: absolute;
    opacity: 0;
    transition: all 0.5s;
    &.loaded {
      position: static;
      opacity: 1;
    }
  }
`;
