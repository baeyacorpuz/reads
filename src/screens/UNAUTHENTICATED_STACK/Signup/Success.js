import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Success = ({ navigation }) => {
  const handleExplore = () => {
    navigation.navigate('Authenticated', {
      screen: 'Dashboard',
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Success!</Text>
        <Text onPress={handleExplore}>Explore now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#4B8078',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Success;
