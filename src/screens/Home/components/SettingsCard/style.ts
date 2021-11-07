import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  background-color: #e0e4ff;
  padding-bottom: 35px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const CardHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  font-size: 30px;
  font-weight: ${(props: {bold?: Boolean}) => props.bold ? 'bold' : 300};
`;

export const CircLeAvatarImage = styled.Image`
  border-radius: 50px;
  height: 50px;
  width: 50px;
`;

export const OptionsContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CircleAvatarIcon = styled.View`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  height: 50px;
  justify-content: center;
  margin-left: -22px;
  width: 50px;
  z-index: 2;
`;
