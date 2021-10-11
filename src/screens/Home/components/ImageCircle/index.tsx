import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

type ImageCircleProps = {
  image: any
}

const ImageCircle = ({image}: ImageCircleProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

export default ImageCircle;
