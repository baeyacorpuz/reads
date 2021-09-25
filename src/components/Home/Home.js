/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Logo from '../../assets/images/whiten.jpg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hi, Yoona Lim</Text>
          <Text style={styles.subTitle}>Welcome to Reads</Text>
        </View>
        <View style={styles.content} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollView: {},
  section: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#e91e63',
    paddingVertical: 20,
    // height: 150,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export default Home;