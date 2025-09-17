import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.jsx';
import DictionaryScreen from '../screens/DictionaryScreen.jsx';
import WordScreen from '../screens/WordScreen.jsx';
import TaskOneScreen from '../screens/TaskOneScreen.jsx';
import TaskTwoScreen from '../screens/TaskTwoScreen.jsx';
import TaskDoneScreen from '../screens/TaskDoneScreen.jsx';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dictionary"
        component={DictionaryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Word"
        component={WordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskOneScreen"
        component={TaskOneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskTwoScreen"
        component={TaskTwoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskDoneScreen"
        component={TaskDoneScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
