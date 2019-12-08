import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'components/HomeScreen';
import CreateBillScreen from 'components/CreateNewBillPage/CreateBillScreen';
import PhotoUploadScreen from 'components/CreateNewBillPage/PhotoUploadScreen';
import SelectPage from 'components/SelectPage/SelectPage';

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
    PhotoUploadScreen: {
      screen: PhotoUploadScreen,
      navigationOptions: () => ({
        title: 'Upload photo'
      }),
    },
    SelectPage: {
      screen: SelectPage,
      navigationOptions: () => ({
        title: 'Make your selection'
      }),
    }

  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
