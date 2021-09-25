import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Signup = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View>
          <Text>READS</Text>
        </View>
        <View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  container: {
    height: 400,
    flex: 1,
    display: 'flex',
  },
});

export default Signup;
