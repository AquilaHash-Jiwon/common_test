import styled from '@emotion/native';

export const MainContainer = styled.View({
  width: 400,
  height: 100,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#ee33',
});
export const Dot = styled.Pressable(({key, index, focused, color}) => ({
  width: focused ? 15 : 10,
  height: focused ? 15 : 10,
  borderRadius: focused ? 15 / 2 : 10 / 2,
  backgroundColor: focused ? color : '#33eeee',
}));
