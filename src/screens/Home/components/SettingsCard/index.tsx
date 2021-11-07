import React from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Card, CardHeader, CardTitle, CircleAvatarIcon, CircLeAvatarImage, OptionsContainer } from './style';

import CreditCard from './../../../../assets/icons/credit-card.svg';
import MainProfile from './../../../../assets/images/profile-main.png';

const { height: screenHeight } = Dimensions.get('screen');

type SettingsCardProps = {
  animationControl: Animated.Value,
  limitAnimationInput: number,
};

const SettingsCard = ({ animationControl, limitAnimationInput }: SettingsCardProps) => {
  const handleGesture = (event:any) => {
    const { nativeEvent: { translationY } } = event;

    if( translationY > limitAnimationInput ) {
      animationControl.setValue(translationY + limitAnimationInput);
    } else {
      Animated.timing(animationControl, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGesture}
      activeOffsetY={-100}
    >
      <Card
        style={{
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
        }}
      >
        <CardHeader>
          <CardTitle>
            Hello
            <CardTitle bold={true}> Jane</CardTitle>
          </CardTitle>
          <OptionsContainer>
            <Animated.View
              style={{
                transform: [{
                  translateX: animationControl.interpolate({
                    inputRange: [0, limitAnimationInput],
                    outputRange: [0, 28.0],
                    extrapolate: 'clamp',
                  }),
                }],
              }}
            >
              <TouchableOpacity onPress={() => null}>
                <CircLeAvatarImage source={MainProfile} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                opacity: animationControl.interpolate({
                  inputRange: [0, limitAnimationInput],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
                zIndex: animationControl.interpolate({
                  inputRange: [0, limitAnimationInput],
                  outputRange: [2, -1],
                  extrapolate: 'clamp',
                }),
              }}
            >
              <CircleAvatarIcon>
                <CreditCard />
              </CircleAvatarIcon>
            </Animated.View>
          </OptionsContainer>
        </CardHeader>
      </Card>
    </PanGestureHandler>
  );
}

export default SettingsCard;
