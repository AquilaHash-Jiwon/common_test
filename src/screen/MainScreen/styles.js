import styled from '@emotion/native';

export const MainContainer = styled.ScrollView({
  flex: 1,
});

export const ApiCallButton = styled.Pressable({
  height: 100,
  width: 100,
  borderRadius: 100 / 2,
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const CommonText = styled.Text({
  color: '#000000',
});

export const BottomView = styled.View({
  width: 300,
  height: 100,
  borderRadius: 15,
  borderWidth: 1,
  margin: 10,
});
