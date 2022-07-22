import { FC, useRef } from 'react';
import { PencilSimple, SignOut } from 'phosphor-react';

//components
import { Modal } from '@/components';
import { ConfirmSignOut } from '@/components';

//types
import { HeaderProps } from './types';
import { ModalHandler } from '../Modal/types';

//styles
import { theme } from '@/styles/theme';
import * as S from './styles';

export const Header: FC<HeaderProps> = ({ profileImage, username, onlineUsersNumber }) => {
  const modalRef = useRef<ModalHandler>(null);

  const openConfirmSignOut = () => modalRef.current?.open();
  const closeConfirmSignOut = () => modalRef.current?.close();

  return (
    <>
      <S.Container>
        <S.Profile>
          <img src={profileImage} alt='' />
          <h1>{username}</h1>
          <PencilSimple size={18} color={theme.colors.white} weight='regular' />
        </S.Profile>
        <S.Wrapper>
          {!!onlineUsersNumber && (
            <S.Online>
              <span />
              <h2>{onlineUsersNumber}{' online'}</h2>
            </S.Online>
          )}
          <SignOut 
            size={22} 
            color={theme.colors.white} 
            weight='bold' 
            onClick={openConfirmSignOut}
          />
        </S.Wrapper>
      </S.Container>
      
      <Modal ref={modalRef}>
        <ConfirmSignOut onCloseConfirmSignOut={closeConfirmSignOut} />
      </Modal>
    </>
  );
}