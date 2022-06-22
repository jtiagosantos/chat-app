import styled from 'styled-components';

export const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.crimson};
  }
  
  width: 100%;
  margin-top: 0.5rem;

  display: flex;
  gap: 0.4rem;

  p {
    font-size: 0.9rem;
  }
`;