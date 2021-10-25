import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  options: {
    marginTop: 35.0,
    marginHorizontal: 30.0,
    padding: 20.0,
    borderRadius: 15.0,
    backgroundColor: '#100F59',
  },
  optionText: {
    fontSize: 18.0,
    color: 'white',
    fontWeight: '600'
  },
  optionCreditCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionCreditCardText: {
    marginLeft: 20.0,
  },
  optionOpenAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20.0,
  },
  currency: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
  },
  currencyBack: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 22.0,
    backgroundColor: '#321BE4'
  },
  rounded: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35.0,
    height: 35.0,
    backgroundColor: 'white',
    borderRadius: 100,
  }
});

export default styles;
