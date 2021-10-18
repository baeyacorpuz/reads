import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
import Password from './Signup/Password';
import Name from './Signup/Name';
import Age from './Signup/Age';
import Success from './Signup/Success';
import Login from './Signup/Login';

const SignupNavigator = createStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <SignupNavigator.Navigator>
      <SignupNavigator.Screen
        name="Sign up"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <SignupNavigator.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <SignupNavigator.Screen
        name="Password"
        component={Password}
        options={{
          headerShown: false,
        }}
      />
      <SignupNavigator.Screen
        name="Name"
        component={Name}
        options={{
          headerShown: false,
        }}
      />
      <SignupNavigator.Screen
        name="Age"
        component={Age}
        options={{
          headerShown: false,
        }}
      />
      <SignupNavigator.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />
    </SignupNavigator.Navigator>
  );
};

export default UnauthenticatedStack;
