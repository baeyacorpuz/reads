import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authController } from '../../../api/user';

const Login = ({ navigation }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await authController.login({
      emailAddress: emailAddress,
      password: password,
    });
    if (user.token) {
      navigation.navigate('Authenticated', {
        screen: 'Dashboard',
      });
    } else {
      console.log('error');
    }
  };

  const loadInitialData = async () => {
    try {
      setEmail(await AsyncStorage.getItem('email'));
    } catch (err) {
      console.log('login error');
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}>
          <Text>OR</Text>
        </View>
        {/* <Formik
          initialValues={{
            emailAddress: emailAddress,
            password: password,
          }}
          onSubmit={handleLogin}>
          {({ handleSubmit, values }) => ( */}
        <View style={styles.form}>
          <View style={styles.textField}>
            <TextInput
              style={styles.textField}
              autoCapitalize="none"
              value={emailAddress}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.textField}>
            <TextInput
              style={styles.textField}
              secureTextEntry
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleLogin}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* )}
        </Formik> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 0,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  divider: {
    marginTop: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  facebookButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#3B5998',
    padding: 10,
    height: 54,
    borderRadius: 50,
    marginBottom: 8,
  },
  googleButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#DB4437',
    padding: 10,
    height: 54,
    borderRadius: 50,
    marginBottom: 8,
  },
  textField: {
    backgroundColor: '#EFEFEF',
    height: 54,
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
  continueButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#AD8C63',
    padding: 10,
    height: 54,
    borderRadius: 50,
  },
});

export default Login;
