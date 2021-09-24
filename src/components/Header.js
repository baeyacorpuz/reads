import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BookCover from '../assets/images/whiten.jpg';

const Header = () => {
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={BookCover}
        resizeMode="cover"
        style={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: 250,
    flex: 1,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
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

export default Header;
