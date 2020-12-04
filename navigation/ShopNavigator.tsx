import React, { FC } from 'react';
import { ShopParamList } from './ShopParamList';
import { colors } from '../constants/Colors';

import { createStackNavigator } from '@react-navigation/stack';
import ProductOverview from '../screens/ProductsOverview';

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
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
