import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'components/HomeScreen';
import SelectPage from 'components/SelectPage/SelectPage';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SelectPage
  },
  {
    initialRouteName: 'SelectPage',
    headerMode: 'none'
  },
);

export default createAppContainer(RootStack);
