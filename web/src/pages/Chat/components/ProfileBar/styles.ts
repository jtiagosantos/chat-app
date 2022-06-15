import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const divStyles = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ProfileDataWrapper = styled.div`
  ${divStyles}

  img {
    max-width: 2rem;
    width: 100%;
    border-radius: 100%;
  }
`;

export const Online = styled.div`
  ${divStyles}

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.limegreen};
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.lightgreen};
  }

  h2 {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.mischka};
  }
`;  