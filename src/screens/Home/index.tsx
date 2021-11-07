import React, { useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import DualCard from './components/DualCard';
import SettingsCard from './components/SettingsCard';
import { Container, Divider, HorizontalList, MainCard } from './style';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const Home = () => {
  const elements: any[] = [
    { id: 1, name: '1' },
    { id: 2,name: '2' },
    { id: 3, name: '3' },
  ];
  const inputRangeMax = 350;
  const axisYPosition = new Animated.Value(0);
  const initialCardAnimationController = new Animated.Value(0);
  const [isScrollable, setIsScrollable] = useState(true);

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
        console.log(translationY);
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

  const updateScrollControl = (state: boolean) => {
    setIsScrollable(state);
  }

  return (
    <Container>
      <Animated.View
        style={{
          opacity: initialCardAnimationController.interpolate({
            inputRange: [0, screenWidth * 0.2],
            outputRange: [1, 0],
            extrapolate: 'clamp'
          }),
        }}
      >
        <SettingsCard
          animationControl={axisYPosition}
          limitAnimationInput={inputRangeMax}
        />
      </Animated.View>
      <PanGestureHandler
        onGestureEvent={handleGesture}
        activeOffsetY={50}
        activeOffsetX={-screenWidth}
      >
        <Animated.View style={{
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
          }),
        }}>
          <Divider />
          <Animated.View
            style={{
              height: initialCardAnimationController.interpolate({
                inputRange:[0, screenWidth * 0.5],
                outputRange: [480.0, screenHeight],
                extrapolate: 'clamp'
              }),
              top: initialCardAnimationController.interpolate({
                inputRange:[0, screenWidth * 0.5],
                outputRange: [0, -210],
                extrapolate: 'clamp'
              }),
            }}
          >
            <HorizontalList
              data={elements}
              keyExtractor={(element: any) => element.name}
              horizontal={true}
              pagingEnabled
              scrollEnabled={isScrollable}
              renderItem={({item, index}: any) => {
                return ((index === 0)
                  ?
                    <DualCard animationController={initialCardAnimationController} updateScrollControl={updateScrollControl} />
                  :
                    <MainCard
                      key={item.name}
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 1}}
                      colors={['#4c669f', '#3b5998', '#192f6a']}
                    />
                );
              }}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

export default {
  name: 'Home',
  component: Home
}
