import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import NewCard from '../NewCard';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

type DualCardProps = {
  animationController: Animated.Value,
  updateScrollControl: Function
}

const DualCard = ({animationController, updateScrollControl}: DualCardProps) => {
  const handleCreditCardOpenEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: animationController
        }
      }
    ],
    {
      useNativeDriver: false,
      listener: (event:any) => {
        const { nativeEvent } = event;
        if(nativeEvent.translationX > 30.0) {
          Animated.timing(animationController, {
            toValue: screenWidth * 0.5,
            duration: 500,
            useNativeDriver: false,
          }).start(async () => {
            await new Promise(() => setTimeout(() => {
              updateScrollControl(false);
              console.log('dit it open');
            }, 800));
          });
        }
      },
    }
  );

  const handleCreditCardCloseEvent = (event:any) => {
    const { nativeEvent } = event;
    if(nativeEvent.translationX * -1 > 25.0) {
      Animated.timing(animationController, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          updateScrollControl(true);
          console.log('did it close');
        }, 700);
      });
    } else {
      animationController.setValue((screenWidth * 0.5) + nativeEvent.translationX);
    }
  }

  return (
    <Animated.View
      style={{
        height: animationController.interpolate({
          inputRange: [-screenWidth * 0.5, 0, screenWidth * 0.5],
          outputRange: [250.0, 450.0, screenHeight],
          extrapolate: 'clamp'
        })
      }}
    >
      <PanGestureHandler
        onGestureEvent={handleCreditCardCloseEvent}
        activeOffsetX={-20}
      >
        <Animated.View
          style={[
            styles.backgroundCard,
            {
              top: animationController.interpolate({
                inputRange: [0, screenWidth * 0.5],
                outputRange: [15.0, 0],
                extrapolate: 'clamp'
              }),
              left: animationController.interpolate({
                inputRange: [0, screenWidth * 0.5],
                outputRange: [30.0, 0],
                extrapolate: 'clamp'
              }),
              width: animationController.interpolate({
                inputRange: [0, screenWidth * 0.5],
                outputRange: [(screenWidth - 60.0), screenWidth],
                extrapolate: 'clamp'
              }),
              height: animationController.interpolate({
                inputRange: [0, screenWidth * 0.5],
                outputRange: [450.0, screenHeight],
                extrapolate: 'clamp'
              }),
              borderRadius: animationController.interpolate({
                inputRange: [0, screenWidth * 0.5],
                outputRange: [20.0, 0],
                extrapolate: 'clamp'
              }),
            }
          ]}
        >
          <NewCard />
        </Animated.View>
      </PanGestureHandler>
      <PanGestureHandler
        onGestureEvent={handleCreditCardOpenEvent}
        activeOffsetX={0}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateX: animationController.interpolate({
                  inputRange: [0, screenWidth * 0.5],
                  outputRange: [0, (screenWidth - 60.0)],
                  extrapolate: 'clamp'
                }),
              },
            ],
            opacity: animationController.interpolate({
              inputRange: [0, screenWidth * 0.5],
              outputRange: [1, 0],
              extrapolate: 'clamp'
            }),
            top: animationController.interpolate({
              inputRange:[0, screenWidth * 0.5],
              outputRange: [0, 200],
              extrapolate: 'clamp'
            }),
          }}
        >
          <LinearGradient
            key='dual-card'
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#df8c61', '#97d43d', '#46631f']}
            style={styles.mainCard}
          >
          </LinearGradient>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

export default DualCard;
