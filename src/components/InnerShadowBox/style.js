import styled from '@emotion/native';

export const MainContainer = styled.View({
  width: 100,
  height: 30,
  borderWidth: 1,
  backgroundColor: '#e3ee',
});

export const InnerShadow = styled.View({
  width: 100,
  height: 30,
  position: 'absolute',
  backgroundColor: 'transparent',
  borderWidth: 0.2,
  borderColor: '#000000',
  overflow: 'hidden',
  shadowOffset: {width: 1, height: 1},
  shadowColor: '#000000',
  shadowOpacity: 0.2,
  elevation: 1,
});
