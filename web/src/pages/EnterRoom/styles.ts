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
    height: 6.25rem;
    width: 100%;
    border-radius: 100%;
    color: #fff;
  }
`;
