import styled from 'styled-components';
export const StyledThemeSwitcher = styled.div`
  margin-left: 48px;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    border: 1px solid rgba(85, 107, 134, 0.83);
    margin-left: auto;
    margin-right: 14px;
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: grey;
    display: block;
    border-radius: 10px;
    position: relative;
    background-image: linear-gradient(to bottom, #93c1e4, #e6f7fc);
  }
  @media screen and (min-width: 768px) {
    label {
      margin-right: 0;
    }
  }

  label:after {
    content: '';
    border: 1px solid rgba(0, 0, 0, 52%);

    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 10px;
    transition: 0.5s;
  }

  input:checked + label {
    background-image: linear-gradient(to bottom, #898989, #f5f5f5);
  }

  input:checked + label:after {
    background: #2d3541;
    left: 100%;
    transform: translateX(-100%);
  }

  label:active:after {
    width: 40px;
  }
`;
