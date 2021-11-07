import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const Divider = styled.View`
  align-self: center;
  background-color: #e0e4ff;
  border-radius: 50.0px;
  height: 6.0px;
  margin: 12.0px 0px;
  width: 45.0px;
`;

export const MainCard = styled(LinearGradient)`
  height: 480.0px;
  width: ${(screenWidth - 60) + 'px'};
  margin: auto 30.0px;
  border-radius: 20.0px;
`;

export const HorizontalList = styled(FlatList)`
  width: ${screenWidth + 'px'};
`;
