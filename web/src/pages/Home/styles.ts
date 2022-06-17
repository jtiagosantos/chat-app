import styled from 'styled-components';
import { XCircle } from 'phosphor-react';

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

export const ButtonGroup = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CloseIcon = styled(XCircle)`
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;