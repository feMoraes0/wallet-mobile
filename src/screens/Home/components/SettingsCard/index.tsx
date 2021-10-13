import React from 'react';
import {Animated, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import ImageCircle from '../ImageCircle';
import styles from './style';

import CreditCard from './../../../../assets/icons/credit-card.svg';
import MainProfile from './../../../../assets/images/profile-main.png';

const { height: screenHeight } = Dimensions.get('screen');

type SettingsCardProps = {
  animationControl: any,
  limitAnimationInput: number,
};

const SettingsCard = ({ animationControl, limitAnimationInput }: SettingsCardProps) => {
  // let sizeAnimationValue:number = 0;
  // const sizeAnimation = new Animated.Value(sizeAnimationValue);

  // const sizeAnimationUpdate = () => {
  //   sizeAnimationValue = Number(!sizeAnimationValue);
  //   Animated.timing(sizeAnimation, {
  //     toValue: sizeAnimationValue,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // }

  return (
    <Animated.View
      style={[
        styles.card,
        {
          marginTop: animationControl.interpolate({
            inputRange: [0, limitAnimationInput],
            outputRange: [60.0, 0],
            extrapolate: 'clamp',
          }),
          marginHorizontal: animationControl.interpolate({
            inputRange: [0, limitAnimationInput],
            outputRange: [30.0, 0],
            extrapolate: 'clamp',
          }),
          paddingTop: animationControl.interpolate({
            inputRange: [0, limitAnimationInput],
            outputRange: [35.0, 95.0],
            extrapolate: 'clamp',
          }),
          borderRadius: animationControl.interpolate({
            inputRange: [0, limitAnimationInput],
            outputRange: [20.0, 0],
            extrapolate: 'clamp',
          }),
          height: animationControl.interpolate({
            inputRange: [0, limitAnimationInput],
            outputRange: [120.0, screenHeight],
            extrapolate: 'clamp',
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
                translateX: animationControl.interpolate({
                  inputRange: [0, limitAnimationInput],
                  outputRange: [0, 28.0],
                  extrapolate: 'clamp',
                })
              }]
            }}
          >
            <TouchableOpacity onPress={() => null}>
              <ImageCircle image={MainProfile} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                opacity: animationControl.interpolate({
                  inputRange: [0, limitAnimationInput],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
                zIndex: animationControl.interpolate({
                  inputRange: [0, limitAnimationInput],
                  outputRange: [2, -1],
                  extrapolate: 'clamp',
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
