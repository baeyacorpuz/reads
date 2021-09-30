import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import placeholderCover from '../../assets/images/cover.jpg';

const BookHeader = ({ cover }) => {
  console.log('here', cover);
  let image = cover ? cover : placeholderCover;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 200,
  },
  image: { height: 250, width: '100%' },
});

export default BookHeader;
