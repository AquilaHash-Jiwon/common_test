import React from 'react';
import * as S from './styles';
import * as E from './events';
import ShakingAnimation from '../../assets/ShakingAnimation';
import {
  DotPagination,
  FlatListWithDotPagination,
  InnerShadowBox,
  ProgressBar,
} from '../../components';

const MainScreen = ({
  isUpdating,
  statusMessage,
  progress,
  maxProgress,
  version,
}) => {
  return (
    <S.MainContainer>
      <ShakingAnimation />
      <S.ApiCallButton onPress={E.apiCallEvent}>
        <S.CommonText>post log test</S.CommonText>
      </S.ApiCallButton>
      <S.CommonText>is updating : {isUpdating.toString()}</S.CommonText>
      <S.CommonText>status message : {statusMessage}</S.CommonText>
      <S.CommonText>downloadad data : {progress}</S.CommonText>
      <S.CommonText>total data : {maxProgress}</S.CommonText>
      <S.CommonText>percentage : {(progress / maxProgress) * 100}</S.CommonText>
      <S.CommonText>version : {version}</S.CommonText>
      <ProgressBar progress={progress / maxProgress} />
      <S.BottomView>
        <S.CommonText>앱 테스트</S.CommonText>
      </S.BottomView>
      <FlatListWithDotPagination />
      <InnerShadowBox />
    </S.MainContainer>
  );
};

export default MainScreen;
