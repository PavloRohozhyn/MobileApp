import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs.jsx';

import { ThemeProvider } from './theme/ThemeContext';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
