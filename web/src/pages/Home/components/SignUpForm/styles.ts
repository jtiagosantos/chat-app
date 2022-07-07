import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageProfile = styled.img`
  max-width: 6.25rem;
  height: 6.25rem;
  width: 100%;
  margin: 0.78rem 0;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
`;