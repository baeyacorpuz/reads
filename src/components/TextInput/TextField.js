import React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextField = () => {
  const [text, setText] = useState('');
  return <TextInput style={styles.input} onChange={setText} value={text} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextField;
