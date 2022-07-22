import styled from 'styled-components';
import bannerImage from '@/images/banner.svg';

export const Container = styled.main`
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  
  @media(max-width: 760px) {
    justify-content: center;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      justify-content: center;
      background: url(${bannerImage}) no-repeat center;
      transform: scaleX(-1);
      opacity: .5;
    }
  }
`

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

  @media(max-width: 760px) {
    display: none;
  }
`;