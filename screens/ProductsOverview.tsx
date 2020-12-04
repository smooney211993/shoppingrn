import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { AppState } from '../store';
import { useSelector } from 'react-redux';
import { ShopNavProps } from '../navigation/ShopParamList';
import ProductItem from '../components/shop/ProductItem';

const ProductsOverview = ({ navigation }: ShopNavProps<'Product'>) => {
  const { availableProducts } = useSelector(
    (state: AppState) => state.productReducer
  );
  return (
    <FlatList
      data={availableProducts}
      renderItem={(item) => (
        <ProductItem
          imageUrl={item.item.imageUrl}
          price={item.item.price}
          id={item.item.id}
          title={item.item.title}
          onViewPress={() => {
            navigation.navigate('ProductDetail', {
              name: item.item.title,
            });
          }}
        />
      )}
    />
  );
};

export default ProductsOverview;
