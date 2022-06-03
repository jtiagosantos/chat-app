import styled from 'styled-components';

export const Container = styled.main`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: #121212;
  border-radius: 8px;
  padding: 1rem;

  h2 {
    width: 100%;
    text-align: left;
    color: #ffffff;
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0.5rem 0.625rem;

    border: 1px solid gray;
    border-radius: 8px;
    background-color: #52525B;

    color: #A1A1AA;
    font-size: 1.3rem;
    text-align: center;
  }
`;