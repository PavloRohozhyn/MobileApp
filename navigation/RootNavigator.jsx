import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.jsx';
import DetailsScreen from '../screens/DetailScreen.jsx';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

  );
};


export default RootNavigator;
