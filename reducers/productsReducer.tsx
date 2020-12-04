import PRODUCT from '../models/dummy-data';
interface ProductItem {
  id: string;
  ownerId: string;
  imageUrl: string;
  description: string;
  price: number;
  title: string;
}

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
