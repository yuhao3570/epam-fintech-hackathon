import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'components/HomeScreen';
import CreateBillScreen from 'components/CreateBillScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    CreateBillScreen: {
      screen: CreateBillScreen,
      navigationOptions: () => ({
        title: 'Create a new bill'
      }),
    }, 
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
