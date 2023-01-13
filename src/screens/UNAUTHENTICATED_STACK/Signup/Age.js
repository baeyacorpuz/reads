import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { View, Platform, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Age = ({ navigation }) => {
  const [name, setName] = useState('');
  const handleContinue = () => {
    navigation.navigate('Success');
  };

  const loadInitialData = async () => {
    const value = await AsyncStorage.getItem('name');
    setName(value);
  };

  useEffect(() => {
    loadInitialData();
  });

  return (
    <Formik initialValues={{ age: '' }} onSubmit={handleContinue}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.label}>Hi {name}, how old are you?</Text>
            <TextInput
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              style={styles.textField}
            />
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 0,
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
