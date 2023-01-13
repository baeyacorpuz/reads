import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Feature = ({ handlePress, featuredBook }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: featuredBook.cover,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{featuredBook.title}</Text>
            <Text style={styles.author}>{featuredBook.subTitle}</Text>
            <Text style={styles.author}>{featuredBook.author[0]}</Text>
          </View>
        </View>
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
    height: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  wrapper: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    paddingLeft: 16,
    flexGrow: 1,
    flex: 1,
  },
  title: {
    fontSize: 22,
    flex: 1,
    flexWrap: 'wrap',
  },
  author: {
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
  },
  image: { height: 140, width: 100, borderRadius: 10 },
});

export default Feature;
