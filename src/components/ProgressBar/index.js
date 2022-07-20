import React from 'react';
import * as S from './styles';

const ProgressBar = ({progress}) => {
  return (
    <S.MainContainer>
      <S.Progress progress={progress} />
    </S.MainContainer>
  );
};

export default ProgressBar;
