import { FC, PropsWithChildren } from 'react';

//images
import bannerImage from '@/images/banner.svg';

//styles
import { Container, ImageWrapper } from './styles';

export const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container>
      {children}
      <ImageWrapper>
        <img src={bannerImage} alt="" />
      </ImageWrapper>
    </Container>
  );
}