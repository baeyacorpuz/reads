import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../../assets/images/whiten.jpg';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image source={Logo} style={{ height: 250, width: '100%' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  section: {
    flex: 0.3,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Home;
