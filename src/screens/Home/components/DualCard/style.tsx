import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainCard: {
    height: 480.0,
    width: (screenWidth - 85.0),
    marginRight: 30.0,
    marginLeft: 55.0,
    borderRadius: 20.0,
  },
  backgroundCard: {
    position: 'absolute',
    backgroundColor: '#f00',
    borderRadius: 20.0,
  }
});

export default styles;
