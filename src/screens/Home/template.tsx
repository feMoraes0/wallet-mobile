import React from 'react';
import { Animated, FlatList, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler';
import SettingsCard from './components/SettingsCard';
import styles from './style';

const { width: screenWidth } = Dimensions.get('screen');

const template = () => {
  const elements: any[] = [
    {
      id: 1,
      name: '1'
    },
    {
      id: 2,
      name: '2'
    },
    {
      id: 3,
      name: '3'
    },
  ];
  const inputRangeMax = 350;
  const axisYPosition = new Animated.Value(0);

  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          translationY: axisYPosition,
        },
      },
    ],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const { translationY } = event.nativeEvent;
        if(translationY > 15) {
          Animated.timing(axisYPosition, {
            toValue: inputRangeMax,
            duration: 500,
            useNativeDriver: false
          }).start();
        }
      }
    },
  );

  return (
    <View style={styles.container}>
      <SettingsCard
        animationControl={axisYPosition}
        limitAnimationInput={inputRangeMax}
      />
      <PanGestureHandler
        onGestureEvent={handleGesture}
        activeOffsetY={0}
        activeOffsetX={-screenWidth}
      >
        <Animated.View style={[
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
          <FlatList
            style={styles.horizontalList}
            data={elements}
            keyExtractor={element => element.name}
            horizontal={true}
            pagingEnabled
            renderItem={(element: any) => {
              return (
                <LinearGradient
                  key={element.name}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.mainCard}
                >
                </LinearGradient>
              );
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default template;
