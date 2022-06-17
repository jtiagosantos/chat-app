import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageProfile = styled.img`
  max-width: 6.25rem;
  height: 6.25rem;
  width: 100%;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
`;