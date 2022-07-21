import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, View} from 'react-native';
import * as S from './style';

const FindLoading = () => {
  const shakeAnimation = useRef(new Animated.Value(1)).current;
  const shakeAnimationR = useRef(new Animated.Value(1)).current;
  const startShake = () => {
    console.log('start shake');
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
    Animated.sequence([
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 0.8,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimationR, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <Pressable
        onPress={startShake}
        style={{width: 40, height: 40, borderRadius: 20, borderWidth: 1}}
      />
      <S.MainContainer>
        {/* <Animated.View
          style={{
            width: 50,
            height: 50,
            borderRadius: 5,
            backgroundColor: '#e3e',
            transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
          }}></Animated.View> */}
        <S.RowBox>
          {/* <S.AnimationBlock shakeAnimation={shakeAnimation} color="#DFDFE1" /> */}
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#5300E7',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimationR}, {scaleY: shakeAnimationR}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
        </S.RowBox>
        <S.RowBox>
          <Animated.View
            style={{
              backgroundColor: '#5300E7',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimationR}, {scaleY: shakeAnimationR}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
        </S.RowBox>
        <S.RowBox>
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#DFDFE1',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimation}, {scaleY: shakeAnimation}],
            }}
          />
          <Animated.View
            style={{
              backgroundColor: '#5300E7',
              borderRadius: 5,
              width: 30,
              height: 30,
              transform: [{scaleX: shakeAnimationR}, {scaleY: shakeAnimationR}],
            }}
          />
        </S.RowBox>
      </S.MainContainer>
    </View>
  );
};

export default FindLoading;
