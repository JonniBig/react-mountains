import styled from 'styled-components';
export const StyledFooter = styled.footer`
  background-color: var(--primary-background-color-blue);
  height: var(--footer-height);
  box-shadow: rgba(0, 0, 0, 0.07) 0px -1px 1px, rgba(0, 0, 0, 0.07) 0px -2px 2px,
    rgba(0, 0, 0, 0.07) 0px -4px 4px, rgba(0, 0, 0, 0.07) 0px -8px 8px,
    rgba(0, 0, 0, 0.07) 0px -16px 16px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 12px;
  }
`;
