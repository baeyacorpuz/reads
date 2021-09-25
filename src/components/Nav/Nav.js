import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticatedStack from '../../screens/AUTHENTICATED_STACK/AUTH_STACK';

const Switch = createStackNavigator();

const SwitchStack = () => {
  return (
    <Switch.Navigator>
      <Switch.Screen
        options={{
          headerShown: false,
        }}
        name="Authenticated"
        component={AuthenticatedStack}
      />
    </Switch.Navigator>
  );
};

const Nav = () => {
  return (
    <NavigationContainer>
      <SwitchStack />
    </NavigationContainer>
  );
};

export default Nav;
