import styled from "styled-components";

export const Container = styled.button`
  max-width: 18.75rem;
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;

  border-radius: 8px;
  background-color: #8257E5;
  color: #fff;
  font-size: 1rem;

  transition: filter 0.2ms;

  &:hover {
    filter: brightness(0.9);
  }
`;