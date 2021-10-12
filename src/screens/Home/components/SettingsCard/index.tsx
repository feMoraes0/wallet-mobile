import React from 'react';
import {Animated, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import ImageCircle from '../ImageCircle';
import styles from './style';

import CreditCard from './../../../../assets/icons/credit-card.svg';
import MainProfile from './../../../../assets/images/profile-main.png';

const { height: screenHeight } = Dimensions.get('screen');

const SettingsCard = () => {
  let sizeAnimationValue:number = 0;
  const sizeAnimation = new Animated.Value(sizeAnimationValue);

  const sizeAnimationUpdate = () => {
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
            outputRange: [30.0, 0]
          }),
          paddingTop: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [35.0, 95.0],
          }),
          borderRadius: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20.0, 0]
          }),
          height: sizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [120.0, screenHeight]
          }),
        }
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Hello <Text style={styles.titleBold}>Jane</Text></Text>
        <View style={styles.optionsBox}>
          <Animated.View
            style={{
              transform: [{
                translateX: sizeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 28.0]
                })
              }]
            }}
          >
            <TouchableOpacity onPress={() => sizeAnimationUpdate()}>
              <ImageCircle image={MainProfile} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                opacity: sizeAnimation.interpolate({
                  inputRange: [0, 0.5],
                  outputRange: [1, 0]
                }),
                zIndex: sizeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, -1]
                })
              }
            ]}
          >
            <View style={styles.buttonCircle}>
              <CreditCard />
            </View>
          </Animated.View>
          
        </View>
      </View>
    </Animated.View>
  )
}

export default SettingsCard;
