import { NavigationContainer } from '@react-navigation/native';
// navigation
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  const fetchFont = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
  };
  return !fontLoaded ? (
    <AppLoading
      startAsync={fetchFont}
      onFinish={() => {
        setFontLoaded(true);
      }}
    />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}
