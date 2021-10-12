import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import SettingsCard from './components/SettingsCard';
import styles from './style';

const template = () => {
  return (
    <View style={styles.container}>
      <SettingsCard />
      <View style={styles.divider} />
    </View>
  );
}

export default template;
