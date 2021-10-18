import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UnauthenticatedStack from '../../screens/UNAUTHENTICATED_STACK/UNAUTH_STACK';
import AuthenticatedStack from '../../screens/AUTHENTICATED_STACK/AUTH_STACK';

const Switch = createStackNavigator();

const SwitchStack = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      const value = await AsyncStorage.getItem('name');
      setUser(await AsyncStorage.getItem('name'));
      console.log(value, 'nav');
    };

    loadInitialData();
  }, []);
  return (
    <Switch.Navigator
      initialRouteName={user !== null ? 'Authenticated' : 'Unauthenticated'}>
      <Switch.Screen
        options={{
          headerShown: false,
        }}
        name="Unauthenticated"
        component={UnauthenticatedStack}
      />
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
