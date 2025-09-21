import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store.js';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from "./navigation/BottomTabs.jsx"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}
