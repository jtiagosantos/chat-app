import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    &:last-of-type {
      span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #32ed48;
        box-shadow: 0px 0px 5px 1px #5cdb6b;
      }

      h2 {
        font-size: 0.9rem;
        color: #cbd2d9;
      }
    }
  }
`;