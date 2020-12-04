import React, { FC } from 'react';
import { ShopParamList } from './ShopParamList';
import { colors } from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import ProductOverview from '../screens/ProductsOverview';
import ProductDetail from '../screens/ProductDetail';

interface ShopNavigatorProps {}

const ShopStack = createStackNavigator<ShopParamList>();

const ShopNavigator: FC<ShopNavigatorProps> = ({}) => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name='Product'
        component={ProductOverview}
        options={{
          title: 'Products',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: 'white',
        }}
      />
      <ShopStack.Screen name='ProductDetail' component={ProductDetail} />
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
