import React, { useState, useEffect } from 'react';
import AppContainer from './src/navigations/navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import RobotoFont from 'native-base/Fonts/Roboto.ttf';
import RobotoMediumFont from 'native-base/Fonts/Roboto_medium.ttf';

import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const [ready, setReady] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Roboto: RobotoFont,
      Roboto_medium: RobotoMediumFont,
      ...Ionicons.font,
      ...MaterialIcons.font
    });
    setReady(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    ready ? (
      <Provider store={store} >
        < AppContainer />
      </Provider >
    ) : (
        <AppLoading />
      )
  );
}
