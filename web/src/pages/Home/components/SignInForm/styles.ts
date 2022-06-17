import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const Actions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mediumslateblue};

  &:hover {
    filter: brightness(0.9);
  }
`;