import React from 'react';
import AppContainer from './src/navigations/navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers/rootReducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>    
  );
}
