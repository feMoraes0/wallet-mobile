import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0e4ff',
    padding: 25.0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25.0,
    fontWeight: 'bold',
  },
  buttonCircle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 100,
    backgroundColor: '#fff',
  }
});

export default styles;
