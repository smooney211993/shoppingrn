import PRODUCT from '../models/dummy-data';
import { ProductItem } from './types';

interface productState {
  availableProducts: ProductItem[];
  userProducts: ProductItem[];
}

const initialState = {
  availableProducts: [...PRODUCT],
  userProducts: [],
};

export default function (state: productState = initialState) {
  return state;
}
