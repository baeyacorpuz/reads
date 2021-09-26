import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hi, Yoona Lim</Text>
        <Text style={styles.subTitle}>Welcome to Reads</Text>
      </View>
      <View style={styles.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: '#14463e',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HeaderBar;
