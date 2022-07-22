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
  headerProperties,
  showHeader = false, 
  children 
}) => {
  const profileImage = headerProperties?.profileImage;
  const username = headerProperties?.username;
  const onlineUsersNumber = headerProperties?.onlineUsersNumber;

  return (
    <>
      {showHeader && (
        <Header 
          profileImage={profileImage} 
          username={username} 
          onlineUsersNumber={onlineUsersNumber} 
        />
      )}

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