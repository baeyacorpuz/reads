/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../components/Home/Home';
import Categories from '../../components/Home/Categories';

const Tab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 10,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
