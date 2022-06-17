import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

export const ImageWrapper = styled.div`
  max-width: 313px;
  max-height: 404px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  }
`;