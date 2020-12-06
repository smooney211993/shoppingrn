import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import cartSlice from './cartReducer';

const { reducer: cartReducer } = cartSlice;

export default combineReducers({ productReducer, cartReducer });
