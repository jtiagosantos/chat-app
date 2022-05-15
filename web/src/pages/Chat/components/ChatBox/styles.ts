import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.78rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 2px solid gray;
  border-radius: 8px;
  
  div {
    display: flex;
    justify-content: space-between;

    input {
      width: 100%;
    }
  }
`;