import styled from 'styled-components';

export const Container = styled.main`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.woodsmoke};
  border-radius: 8px;
  padding: 1rem;

  h2 {
    width: 100%;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }
`;