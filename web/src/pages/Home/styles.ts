import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  div img {
    max-width: 6.25rem;
    width: 100%;
    border-radius: 100%;
    color: #fff;
  }

  form {
    max-width: 18.75rem;
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input {
      width: 100%;
      height: 2.5rem;
      padding: 0.5rem 0.625rem;

      border: 1px solid gray;
      border-radius: 8px;
      background-color: #52525B;

      color: #A1A1AA;
      font-size: 0.875rem;

      &::placeholder {
        color: #A1A1AA;
      }
    }

    button {
      max-width: 18.75rem;
      width: 100%;
      height: 2.5rem;
      margin-top: 0.5rem;

      border-radius: 8px;
      background-color: #8257E5;
      color: #fff;

      transition: filter 0.2ms;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
