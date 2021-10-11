import React, { useEffect, useRef } from 'react';
import {Animated, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';

const { height: screenHeight } = Dimensions.get('screen');

const SettingsCard = () => {
  var sizeAnimationValue:number = 0;
  const sizeAnimation = new Animated.Value(sizeAnimationValue);

  function sizeAnimationUpdate() {
    sizeAnimationValue = Number(!sizeAnimationValue);
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
            outputRange: [60.0, 0]
          }),
          marginHorizontal: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20.0, 0]
          }),
          paddingTop: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [30.0, 90.0],
          }),
          borderRadius: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20.0, 0]
          }),
          height: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [110.0, screenHeight]
          }),
          
        }
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Hello <Text style={styles.titleBold}>Jane</Text></Text>
        <TouchableOpacity onPress={() => sizeAnimationUpdate()}>
          <View style={styles.buttonCircle}></View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default SettingsCard;
