/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from './Home/Home';
import Categories from './Home/Categories';
import Search from './Home/Search';
import Profile from './Profile/Profile';
import Settings from './Profile/Settings';

const Tab = createBottomTabNavigator();

const ProfileNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();

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

const HomeNav = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeNavigator.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#216d5f',
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={ProfileNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
