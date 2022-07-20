import React from 'react';
import * as S from './styles';
import * as E from './events';

const CodePushLoadingScreen = ({statusMessage, progress, maxProgress}) => {
  return (
    <S.MainContainer>
      <S.CommonText>Status: {statusMessage}</S.CommonText>
      <S.CommonText>
        {progress}/{maxProgress}
      </S.CommonText>
    </S.MainContainer>
  );
};

export default CodePushLoadingScreen;
