import React from 'react';
import { Animated, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler';
import SettingsCard from './components/SettingsCard';
import styles from './style';

const template = () => {
  const inputRangeMax = 150;
  const axisYPosition = new Animated.Value(0);

  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          y: axisYPosition,
        },
      },
    ],
    {
      useNativeDriver: false,
    }
  );

  return (
    <View style={styles.container}>
      <SettingsCard
        animationControl={axisYPosition}
        limitAnimationInput={inputRangeMax}
      />
      <PanGestureHandler
        onGestureEvent={handleGesture}
      >
        <Animated.View style={[
          {
            position: 'absolute',
            bottom: 110,
            width: '100%',
          },
          {
            transform: [
              {
                translateY: axisYPosition.interpolate({
                  inputRange: [0, inputRangeMax],
                  outputRange: [0, 50],
                  extrapolateLeft: 'clamp',
                })
              }
            ],
            opacity: axisYPosition.interpolate({
              inputRange: [0, inputRangeMax / 2],
              outputRange: [1, 0],
              extrapolate: 'clamp'
            })
          }
        ]}>
          <View style={styles.divider} />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.mainCard}
          >
            <View />
          </LinearGradient>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default template;
