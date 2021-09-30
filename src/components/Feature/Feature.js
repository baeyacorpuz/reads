import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import Cover from '../../assets/images/cover.jpg';
const Feature = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={Cover} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 200,
  },
  image: { height: 200, width: '100%', borderRadius: 10 },
});

export default Feature;
