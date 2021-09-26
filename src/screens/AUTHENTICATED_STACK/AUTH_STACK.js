/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home/Home';
import Categories from './Home/Categories';
import Search from './Home/Search';
import Profile from './Profile/Profile';
import Settings from './Profile/Settings';

const Tab = createBottomTabNavigator();

const ProfileNavigator = createStackNavigator();

const ProfileNav = () => {
  return (
    <ProfileNavigator.Navigator>
      <ProfileNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileNavigator.Screen name="Settings" component={Settings} />
    </ProfileNavigator.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#216d5f',
        tabBarStyle: {
          position: 'absolute',
          paddingBottom: 10,
          elevation: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={ProfileNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
