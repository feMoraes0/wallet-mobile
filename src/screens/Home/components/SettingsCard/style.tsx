import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0e4ff',
    paddingBottom: 35.0,
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    marginLeft: -22.0,
  },
  optionsBox: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
