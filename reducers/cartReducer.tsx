import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from './types';

interface InitialState {
  items: ProductItem[];
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
      state.items.push(payload.item);
    },
  },
});

export default cartSlice;
