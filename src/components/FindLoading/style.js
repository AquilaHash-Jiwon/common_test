import styled from '@emotion/native';
import {Animated} from 'react-native';

export const MainContainer = styled.View({
  width: 132,
  height: 132,
  margin: 12,
  justifyContent: 'space-between',
});

export const AnimationBlock = styled(Animated.View)(
  ({color, shakeAnimation}) => ({
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: color,
    transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
  }),
);

export const RowBox = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
