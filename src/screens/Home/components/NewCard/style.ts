import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Options = styled.View`
  background-color: #100f59;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 35px;
  padding: 20px;
`;

export const CreditCardOption = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const OptionsText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
`;

export const OpenAccountOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const Currency = styled.View`
  position: absolute;
  flex-direction: row;
  right: 0;
`;

export const CircleAvatarIcon = styled.View`
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  height: 35px;
  justify-content: center;
  width: 35px;
`;

export const CircleAvatarIconBack = styled(CircleAvatarIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 27px;
  background-color: #321be4;
`;
