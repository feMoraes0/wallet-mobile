import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    alignSelf: 'center',
    backgroundColor: '#e0e4ff',
    borderRadius: 50.0,
    height: 6.0,
    marginVertical: 12.0,
    width: 45.0,
  },
  mainCard: {
    height: 480.0,
    width: (screenWidth * 0.9 - 30.0),
    marginHorizontal: 30.0,
    borderRadius: 20.0,
  },
  horizontalList: {
    width: screenWidth,
  }
});

export default styles;
