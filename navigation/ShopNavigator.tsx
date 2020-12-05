import React, { FC } from 'react';
import { ShopParamList } from './ShopParamList';
import { colors } from '../constants/Colors';
import { Platform } from 'react-native';

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
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
        }}
      />
      <ShopStack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
      />
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
