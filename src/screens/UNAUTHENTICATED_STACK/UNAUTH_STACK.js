import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
import Password from './Signup/Password';
import Name from './Signup/Name';

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
    </SignupNavigator.Navigator>
  );
};

export default UnauthenticatedStack;
