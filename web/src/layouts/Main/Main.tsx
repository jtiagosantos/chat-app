import { FC, PropsWithChildren } from 'react';

//images
import banner from '@/images/banner.svg';

//styles
import { Container, ImageWrapper } from './styles';

export const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Container>
      {children}
      <ImageWrapper>
        <img src={banner} alt="" />
      </ImageWrapper>
    </Container>
  );
}