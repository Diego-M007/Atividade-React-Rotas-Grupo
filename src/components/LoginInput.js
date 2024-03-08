import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginInput({ placeholder, secureTextEntry }) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        inputMode="text"
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}
