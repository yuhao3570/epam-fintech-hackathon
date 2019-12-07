import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'components/HomeScreen';
import CreateBillScreen from 'components/CreateBillScreen';
import PhotoUploadScreen from 'components/PhotoUploadScreen';

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
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
