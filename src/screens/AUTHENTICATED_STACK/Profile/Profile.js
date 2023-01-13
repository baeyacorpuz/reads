import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import HeaderBar from '../../../components/Header';
import Tools from '../../../components/Tools/Tools';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderBar
          title="Bea Aira Lee S. Corpuz"
          subtitle="Software Developer"
        />
        <Tools />

        <View style={styles.section}>
          <View>
            <Text>Others</Text>
          </View>
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
  scrollView: {},
  section: {
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default Profile;
