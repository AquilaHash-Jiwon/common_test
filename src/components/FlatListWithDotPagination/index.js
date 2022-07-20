import React, {useState} from 'react';
import * as S from './style';
import DotPagination from '../DotPagination';

const FlatListWithDotPagination = () => {
  const [curPage, setCurPage] = useState(0);
  const totalPage = 10;

  return (
    <S.MainContainer>
      {/* <S.FlatList /> */}
      <S.TestButton
        onPress={() => (curPage < 1 ? setCurPage(0) : setCurPage(curPage - 1))}
      />
      <S.TestButton
        onPress={() =>
          curPage > totalPage - 2
            ? setCurPage(totalPage - 1)
            : setCurPage(curPage + 1)
        }
      />
      <DotPagination
        curPage={curPage}
        totalPage={totalPage}
        activeDotColor="#e3e"
      />
    </S.MainContainer>
  );
};

export default FlatListWithDotPagination;
