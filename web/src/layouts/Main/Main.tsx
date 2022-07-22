import { FC, PropsWithChildren } from 'react';

//components
import { Header } from '@/components';

//images
import bannerImage from '@/images/banner.svg';

//types
import { MainProps } from './types';

//styles
import * as S from './styles';

export const Main: FC<PropsWithChildren<MainProps>> = ({ 
  showHeader = false, 
  children 
}) => {
  return (
    <>
      {showHeader && <Header />}

      <S.Container>
        <S.ContentWrapper>
          {children}
          <S.ImageWrapper>
            <img src={bannerImage} alt="" />
          </S.ImageWrapper>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
}