import React from 'react';
import { StyleSheet, View } from 'react-native';

const Categories = () => {
  return <View style={styles.container} />;
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

export default Categories;
