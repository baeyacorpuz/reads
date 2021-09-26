/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderBar from '../../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderBar
          title="Bea Aira Lee S. Corpuz"
          subtitle="Software Developer"
        />
        <View
          style={{
            backgroundColor: 'black',
            flex: 1,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: '#d3d3d3',
            }}
          />
        </View>
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
  content: {},
  scrollView: {},
  section: {
    alignContent: 'center',
    justifyContent: 'center',
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

export default Profile;
