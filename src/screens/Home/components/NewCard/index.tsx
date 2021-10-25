import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Euro from '../../../../assets/icons/euro.svg';
import Pounds from '../../../../assets/icons/pounds.svg';
import CreditCard from '../../../../assets/icons/credit-card.svg';
import AccountCard from '../../../../assets/icons/account-card.svg';
import styles from './style';

const NewCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.options}>
        <View style={styles.optionCreditCard}>
          <CreditCard stroke='#fff' />
          <Text style={[styles.optionCreditCardText, styles.optionText]}>Credit card</Text>
        </View>
        <View style={styles.optionOpenAccount}>
          <AccountCard stroke='#fff' />
          <Text style={[styles.optionCreditCardText, styles.optionText]}>Open an account</Text>
          <View style={styles.currency}>
            <View style={[styles.rounded, styles.currencyBack]}>
              <Pounds />
            </View>
            <View style={styles.rounded}>
              <Euro />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewCard;
