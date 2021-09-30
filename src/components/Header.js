import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = ({ title, subtitle }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
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
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // margin: 10,
    // borderRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HeaderBar;
