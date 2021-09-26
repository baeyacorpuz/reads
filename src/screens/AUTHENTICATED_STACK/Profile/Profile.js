import React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import HeaderBar from '../../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderBar title="Bea Aira Lee S. Corpuz" subtitle="Software Developer" />
        <View
          style={{
            backgroundColor: 'black',
            height: 2,
            flex: 1,
            alignSelf: 'center',
          }}
        />
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
    backgroundColor: '#14463e',
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

export default Profile;
