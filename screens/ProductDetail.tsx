import React, { FC } from 'react';
import { ShopNavProps } from '../navigation/ShopParamList';
import {
  Text,
  ScrollView,
  View,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { ProductItem } from '../reducers/types';
import { colors } from '../constants/Colors';

const ProductDetail = ({ route }: ShopNavProps<'ProductDetail'>) => {
  const productId = route.params.id;
  const selectedProduct = useSelector((state: AppState) =>
    state.productReducer.availableProducts.find(
      (product: ProductItem) => product.id === productId
    )
  );

  console.log(selectedProduct);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct?.imageUrl }} />
      <View style={styles.actions}>
        <Button color={colors.primary} title='Add To Card' onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct?.price}</Text>
      <Text style={styles.description}>{selectedProduct?.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default ProductDetail;
