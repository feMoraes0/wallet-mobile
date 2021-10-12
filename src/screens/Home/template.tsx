import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SettingsCard from './components/SettingsCard';
import styles from './style';

const template = () => {
  return (
    <View style={styles.container}>
      <SettingsCard />
      <View style={styles.divider} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.mainCard}
      >
        <View />
      </LinearGradient>
    </View>
  );
}

export default template;
