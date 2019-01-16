import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='alarm'
    />
  ),
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-settings'}
//     />
//   ),
// };

const ProfileStack = createStackNavigator({
  Profile: SettingsScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
     name='info'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  ProfileStack,
});
