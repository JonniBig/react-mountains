import styled from 'styled-components';

export const StyledUserSettings = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  .previewAvatar {
    display: flex;
    align-items: center;
  }
  .inputWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: none;
  }
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 32px 12px;
    z-index: 100;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
  }
  input[type='file'] {
    display: none;
  }

  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
