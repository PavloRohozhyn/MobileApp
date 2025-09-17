import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import StatisticScreen from '../screens/StatisticScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';

import RootNavigator from './RootNavigator.jsx';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#917F43',
      }}
    >
      <Tab.Screen
        name="Home"
        component={RootNavigator}
        options={{
          title: 'Дім',
          tabBarIcon: ({ size }) => {
            return <AntDesign name="star" size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticScreen}
        options={{
          title: 'Статистика',
          tabBarIcon: ({ size }) => {
            return <AntDesign name="line-chart" size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Профіль',
          tabBarIcon: ({ size }) => {
            return <AntDesign name="user" size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
