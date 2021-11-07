import React from 'react';
import Euro from '../../../../assets/icons/euro.svg';
import Pounds from '../../../../assets/icons/pounds.svg';
import CreditCard from '../../../../assets/icons/credit-card.svg';
import AccountCard from '../../../../assets/icons/account-card.svg';
import { CircleAvatarIcon, CircleAvatarIconBack, Container, CreditCardOption, Currency, OpenAccountOption, Options, OptionsText } from './style';

const NewCard = () => {
  return (
    <Container>
      <Options>
        <CreditCardOption>
          <CreditCard stroke='#fff' />
          <OptionsText>Credit card</OptionsText>
        </CreditCardOption>
        <OpenAccountOption>
          <AccountCard stroke='#fff' />
          <OptionsText>Open an account</OptionsText>
          <Currency>
            <CircleAvatarIconBack>
              <Pounds />
            </CircleAvatarIconBack>
            <CircleAvatarIcon>
              <Euro />
            </CircleAvatarIcon>
          </Currency>
        </OpenAccountOption>
      </Options>
    </Container>
  );
};

export default NewCard;
