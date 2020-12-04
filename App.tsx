import { NavigationContainer } from '@react-navigation/native';
// navigation
import ShopNavigator from './navigation/ShopNavigator';

import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}
