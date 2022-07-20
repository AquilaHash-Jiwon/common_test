import React, {useRef} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';

const ShakingAnimation = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <View>
      <Pressable
        onPress={startShake}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>Shake That</Text>
      </Pressable>
      <Animated.View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{translateX: shakeAnimation}],
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#e3e',
          }}
        />
      </Animated.View>
    </View>
  );
};
export default ShakingAnimation;
