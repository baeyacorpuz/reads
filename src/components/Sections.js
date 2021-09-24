import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sections = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.screenTitle}>Welcome to READS</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dashboard</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello World</Text>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  screenTitle: {
    marginTop: 32,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
    color: '#216e5f',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#48847a',
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

export default Sections;
