import React, { FC } from 'react';
import { ShopParamList } from './ShopParamList';
import { colors } from '../constants/Colors';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
// screens
import ProductOverview from '../screens/ProductsOverview';
import ProductDetail from '../screens/ProductDetail';
import CartScreen from '../screens/Cart';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/shop/UI/HeaderButton';
interface ShopNavigatorProps {}

const ShopStack = createStackNavigator<ShopParamList>();

const ShopNavigator: FC<ShopNavigatorProps> = ({}) => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name='Product'
        component={ProductOverview}
        options={({ navigation }) => ({
          title: 'Products',
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
              <Item
                title='Cart'
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => navigation.navigate('Cart')}
              />
            </HeaderButtons>
          ),
        })}
      />
      <ShopStack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
      />
      <ShopStack.Screen
        name='Cart'
        component={CartScreen}
        options={{ headerTitle: 'Your Cart' }}
      />
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
