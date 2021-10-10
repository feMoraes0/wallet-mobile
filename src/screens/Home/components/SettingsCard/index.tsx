import React, { useEffect, useRef } from 'react';
import {Animated, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';

const { height: screenHeight } = Dimensions.get('screen');

const SettingsCard = () => {
  var sizeAnimationValue:number = 0;
  const sizeAnimation = new Animated.Value(sizeAnimationValue);

  function sizeAnimationUpdate() {
    sizeAnimationValue = sizeAnimationValue ? 0 : 1;
    Animated.timing(sizeAnimation, {
      toValue: sizeAnimationValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View
      style={[
        styles.card,
        {
          marginTop: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [50.0, 0]
          }),
          marginHorizontal: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20.0, 0]
          }),
          borderRadius: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20.0, 0]
          }),
          height: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [100.0, screenHeight]
          }),
          
        }
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Hello, Fernando</Text>
        <TouchableOpacity onPress={() => sizeAnimationUpdate()}>
          <View style={styles.buttonCircle}></View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default SettingsCard;
