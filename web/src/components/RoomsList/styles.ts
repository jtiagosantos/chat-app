import styled, { css } from 'styled-components';
import { zoomIn } from '@/styles/animations/zoomIn';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  border-radius: 8px;
  padding: 1rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${zoomIn} 200ms ease;

  > svg {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  max-height: 323px;
  list-style: none;
  
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightgray};
    border-radius: 5px;
  }
`;

export const ListItem = styled.li`
  max-width: 465px;
  min-height: 35px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  display: flex;
`;

const pStyles = css`
  padding: 8px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
`;

export const RoomName = styled.p`
  ${pStyles};

  min-width: 111px;
  background-color: ${({ theme }) => theme.colors.mediumslateblue};
`;

export const RoomCode = styled.p`
  ${pStyles};

  background-color: ${({ theme }) => theme.colors.dimgray};
  width: 100%;

  @media(max-width: 445px) {
    width: 250px;
  }
`;

export const RoomData = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  align-items: center;
`;

export const Actions = styled.div`
  width: 100%;
  margin: 3rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  svg {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  svg:not(:first-of-type) {
    background-color: ${({ theme }) => theme.colors.mediumslateblue};
    padding: 5px;
    border-radius: 8px;
  }
`;