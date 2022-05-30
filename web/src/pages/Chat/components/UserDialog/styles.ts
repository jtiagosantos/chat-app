import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 14px;
  bottom: -20px;
  right: 70%;

  min-width: 270px;
  background-color: #141414;
  border-radius: 8px;

  overflow: hidden;

  div:nth-of-type(1) {
    width: 100%;
    height: 3.5rem;
    background-color: #8257E5;
    padding: 5px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    } 
  }

  h1 {
    font-size: 1.25rem;
    color: #ffffff;
    margin-left: 1rem;
    transform: translateY(-80%);
  }
`;

export const ProfileImage = styled.div`
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: translateY(-50%);
    margin-left: 1rem;

    color: #ffffff;
  }
`;