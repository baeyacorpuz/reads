import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import signup from '../../assets/images/sign-up.png';
import { authController } from '../../api/user';
import { isExisting } from '../../utils/variables';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const handleContinue = async () => {
    const user = await authController.findByEmail({
      emailAddress: email,
    });

    if (user.status) {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('isExisting', 'true');
    }

    if (!isExisting) {
      navigation.navigate('Password');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.root}>
      <ImageBackground source={signup} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Reads</Text>
          {/* <Formik initialValues={{ email: '' }} onSubmit={handleContinue}>
            {({ handleChange, handleBlur, handleSubmit, values }) => ( */}
          <View style={styles.form}>
            <View style={styles.textField}>
              <TextInput
                style={styles.textField}
                autoCapitalize="none"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* )}
          </Formik> */}
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
          <Text style={styles.privacyPolicyText}>
            By continuing, you agree to Reads’s Terms of Service and acknowledge
            you’ve read our Privacy Policy
          </Text>
        </View>
      </ImageBackground>
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
    backgroundColor:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, #FFFFFF 15.63%, #FFFFFF 97.4%)',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  title: {
    color: '#4B8078',
    fontSize: 24,
  },
  button: {
    width: '100%',
    height: 60,
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  privacyPolicyText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#8E8E8E',
    paddingTop: 10,
  },
  facebookButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#3B5998',
    padding: 10,
    height: 54,
    borderRadius: 50,
  },
  googleButton: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#DB4437',
    padding: 10,
    height: 54,
    borderRadius: 50,
  },
  form: {
    width: '100%',
  },
});

export default Signup;
