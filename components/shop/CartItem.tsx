import React, { FC } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  onRemove: () => void;
}

const CartItem = ({ id, title, price, quantity, onRemove }: CartItem) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.amount}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>{quantity * price}</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color='red'
            onPress={onRemove}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  amount: { fontFamily: 'open-sans-bold', fontSize: 16 },
  deleteButton: {
    marginLeft: 20,
  },
});
