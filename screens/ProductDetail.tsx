import React from 'react';
import ShopNavigator from '../navigation/ShopNavigator';
import { ShopNavProps } from '../navigation/ShopParamList';
import { Text } from 'react-native';

const ProductDetail = ({ route }: ShopNavProps<'ProductDetail'>) => {
  console.log(route);
  return <Text>{route.params.name}</Text>;
};

export default ProductDetail;
