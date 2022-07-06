import styled from 'styled-components';

export const Container = styled.li`
  list-style-type: none;
  border: 1px solid ${({ theme }) => theme.colors.darkslategray};
  border-radius: 8px;
  padding: 9px 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    max-width: 25px;
    height: 25px;
    width: 100%;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;

export const DateTime = styled.p`
  color: ${({ theme }) => theme.colors.darkgray};
  font-size: 0.75rem;
`;

export const MessageText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  font-size: 1rem;
  margin-top: 10px;
`;