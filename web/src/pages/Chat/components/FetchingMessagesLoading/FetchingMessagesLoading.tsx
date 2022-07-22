//styles
import * as S from './styles';
import { Shimmer } from '@/styles/components/Shimmer';

export const FetchingMessagesLoading = () => {
  return (
    <S.MessageList>
      {new Array(5).fill(null).map((_, index) => (
        <S.MessageContainer key={index}>
          <S.Wrapper>
            <Shimmer width='25px' height='25px' />
            <S.Username>
              <Shimmer width='200px' height='25px' />
            </S.Username>
          </S.Wrapper>
          <div>
            <S.MessageText>
              <Shimmer width='100%' height='25px' />
            </S.MessageText>
          </div>
        </S.MessageContainer>
      ))}
    </S.MessageList>
  );
}