import React from 'react';
import * as S from './styles';

const DotPagination = ({curPage, totalPage, activeDotColor}) => {
  const pageNum = 10;
  const array = [...Array(pageNum)].map((x, i) => i);
  return (
    <S.MainContainer>
      {array.map((x, i) => {
        return (
          <S.Dot
            key={i}
            index={curPage}
            focused={i === curPage}
            color={activeDotColor}
          />
        );
      })}
    </S.MainContainer>
  );
};

export default DotPagination;
