import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tools = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  setting: {
    marginTop: -60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
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

export default Tools;
