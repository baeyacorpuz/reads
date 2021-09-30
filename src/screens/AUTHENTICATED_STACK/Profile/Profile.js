/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import HeaderBar from '../../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderBar
          title="Bea Aira Lee S. Corpuz"
          subtitle="Software Developer"
        />
        <View style={styles.setting}>
          <View style={styles.flex}>
            <View style={styles.flexBox}>
              <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Feather name="plus" size={36} color="#9CBEB8" />
                  <Text>New</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Feather name="columns" size={36} color="#9CBEB8" />
                  <Text>Reads</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Feather name="message-square" size={36} color="#9CBEB8" />
                  <Text>Forum</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemContainer}>
                <TouchableOpacity>
                  <Feather name="settings" size={36} color="#9CBEB8" />
                  <Text>Theme</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View  style={styles.section}>
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
  setting: {
    marginTop: -60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingBottom: 5,
  },
  scrollView: {},
  section: {
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
  },
  flex: {
    flex: 1,
    flexWrap: 'wrap',
  },
  flexBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  itemContainer: {
    width: '25%',
    height: 75,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
