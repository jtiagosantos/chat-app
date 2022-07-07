import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  //max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;