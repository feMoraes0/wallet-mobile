import { StyleSheet } from "react-native";

const borderRadius:number = 100.0;

const styles = StyleSheet.create({
  container: {
    width: 50.0,
    height: 50.0,
    borderRadius: borderRadius,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius,
  }
});

export default styles;
