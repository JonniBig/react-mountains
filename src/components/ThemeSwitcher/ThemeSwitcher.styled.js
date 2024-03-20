import styled from 'styled-components';
export const StyledThemeSwitcher = styled.div`
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
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
    background-image: linear-gradient(to bottom, #4f2ee8, #dcdcdc);
  }
  @media screen and (min-width: 768px) {
    label {
      margin-right: 0;
    }
  }

  label:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 10px;
    transition: 0.3s;
  }

  input:checked + label {
    background-image: linear-gradient(to bottom, #4f2ee8, #686868);
  }

  input:checked + label:after {
    left: calc(100% - 1px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 40px;
  }
`;
