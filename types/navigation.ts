import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Rooms: undefined;
  Outside: undefined;
  Device: undefined;
  Plant: undefined;
  Stats: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type RoomsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Rooms'
>;