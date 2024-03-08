import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginText() {
  return (
    <View style={styles.text1}>
      <Text style={styles.text1}>
        Bem vindo a minha tela de Login Básica
      </Text>
    </View>
  );
}
