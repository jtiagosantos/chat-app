import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 64px);
  margin: 0 auto;
  padding: 2rem 1rem;

  position: relative;

  h2 {
    font-size: 1rem;
    color: #FFF;
    font-weight: normal;
  }
`;

export const ChatBox = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.78rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid gray;
  border-radius: 8px;
  
  form {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const MessageList = styled.ul`
  max-height: calc(100vh - 200px);
  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }
`;

export const SendMessageButton = styled.button`
  width: 2.6rem;
  height: 2.5rem;

  border-radius: 100%;
  background-color: #8257E5;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2ms;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      filter: none;
    }
  }
`;