import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { AppState } from '../store';
import { useSelector } from 'react-redux';
import { ShopNavProps } from '../navigation/ShopParamList';

const ProductsOverview = ({ navigation }: ShopNavProps<'Product'>) => {
  const { availableProducts } = useSelector(
    (state: AppState) => state.productReducer
  );
  return (
    <FlatList
      data={availableProducts}
      renderItem={(item) => <Text>{item.item.title}</Text>}
    />
  );
};

export default ProductsOverview;
