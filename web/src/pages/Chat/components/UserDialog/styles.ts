import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: absolute;
  left: 30px;
  bottom: -20px;
  right: 70%;

  min-width: 270px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;

  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.mediumslateblue};
  padding: 5px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transform: translateY(-50%);
  margin-left: 1rem;

  color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1rem;
  transform: translateY(-80%);
`;