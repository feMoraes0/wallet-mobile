import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0e4ff',
    paddingBottom: 30.0,
    paddingHorizontal: 30.0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30.0,
    fontWeight: '300'
  },
  titleBold: {
    fontWeight: 'bold'
  },
  buttonCircle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 100,
    backgroundColor: '#fff',
  }
});

export default styles;
