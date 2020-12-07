import React from 'react';
//types
import { ShopNavProps } from '../navigation/ShopParamList';
import { AppState } from '../store';
// components

import CartItem from '../components/shop/CartItem';

//
import { colors } from '../constants/Colors';

// redux
import { useSelector } from 'react-redux';

import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { HeaderTitle } from '@react-navigation/stack';
interface Props {}
const CartScreen = (props: Props) => {
  const { items, totalAmount } = useSelector(
    (state: AppState) => state.cartReducer
  );
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.ammount}>18</Text>{' '}
        </Text>
        <Button
          color={colors.accent}
          title='Order Now'
          onPress={() => {}}
          disabled={totalAmount === 0}
        />
      </View>
      <View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  ammount: {
    color: colors.accent,
  },
});

export default CartScreen;
