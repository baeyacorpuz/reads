
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Nav from './src/components/Nav/Nav';

const App = () => {

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <Nav />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
