import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  padding: 10px 8px;
  border-radius: 8px;

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.dimgray};
    color: ${({ theme }) => theme.colors.manatee};
    font-size: 1rem;
    text-align: center;
  }
`;