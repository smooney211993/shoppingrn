import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from './types';

interface CartItem extends ProductItem {
  quantity: number;
}

interface InitialState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: InitialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<{ item: ProductItem }>) => {
      const itemExists = state.items.find(
        (item) => item.id === payload.item.id
      );
      if (itemExists) {
        itemExists.quantity++;
        state.totalAmount = state.items.reduce(
          (a, b) => a + b.quantity * b.price,
          0
        );
      } else {
        state.items.push({ ...payload.item, quantity: 1 });
        state.totalAmount = state.items.reduce(
          (a, b) => a + b.quantity * b.price,
          0
        );
      }
    },
  },
});

export const { reducer: cartReducer } = cartSlice;
export const { add: addToCart } = cartSlice.actions;
