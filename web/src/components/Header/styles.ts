import styled, { css } from 'styled-components';

export const Container = styled.header`
  max-width: 1000px;
  width: 100%;
  padding: 2rem 1rem 0;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const divStyles = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Profile = styled.div`
  ${divStyles}

  img {
    max-width: 2rem;
    width: 100%;
    border-radius: 100%;
  }

  h1 {
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.mischka};
  }
`;