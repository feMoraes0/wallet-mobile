import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text } from 'react-native';

const Home = () => {
  return (
    <>
      <View>
        <Text>Home Screen</Text>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

export default {
  name: 'Home',
  component: Home
}
