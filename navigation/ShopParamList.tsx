import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ShopParamList = {
  Product: undefined;
};

export type ShopNavProps<T extends keyof ShopParamList> = {
  navigation: StackNavigationProp<ShopParamList, T>;
  route: RouteProp<ShopParamList, T>;
};
