import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../../constants/Colors';

const CustomHeaderButtons = (props: any) => {
  return (
    <HeaderButton
      {...props}
      //IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
    />
  );
};

export default CustomHeaderButtons;
