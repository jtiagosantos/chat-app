import styled from 'styled-components';

export const MessageList = styled.ul`
  max-height: calc(100vh - 200px);
  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;

export const MessageContainer = styled.li`
  list-style-type: none;
  border: 1px solid ${({ theme }) => theme.colors.darkslategray};
  border-radius: 8px;
  padding: 9px 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > div {
    border-radius: 100%;
  }
`;

export const Username = styled.div`
  width: 100%;

  div {
    border-radius: 8px;
  }
`;

export const MessageText = styled.p`
  margin-top: 10px;

  div {
    border-radius: 8px;
  }
`;