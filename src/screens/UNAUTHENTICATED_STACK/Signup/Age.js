import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { View, Platform, StyleSheet, Text } from 'react-native';

const Age = ({ navigation }) => {
  const handleContinue = () => {
    navigation.navigate('Success');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>How old are you?</Text>
        <TextInput
          style={styles.textField}
          textContentType="password"
          autoCapitalize="none"
          keyboardType="visible-password"
        />
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText} onPress={handleContinue}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: Platform.OS === 'ios' ? 70 : 0,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  label: {
    fontSize: 22,
    color: '#4B8078',
  },
  textField: {
    backgroundColor: '#EFEFEF',
    height: 54,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  continueButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#4B8078',
    padding: 10,
    height: 54,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Age;
