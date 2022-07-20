import styled from '@emotion/native';

const width = 350;
export const MainContainer = styled.View({
  width: width,
  height: 30,
  borderRadius: 20,
  borderWidth: 1,
  justifyContent: 'center',
});

export const Progress = styled.View(({progress}) => ({
  width: width * progress,
  height: 28,
  borderRadius: 20,
  backgroundColor: '#3eee',
}));
