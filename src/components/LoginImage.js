import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginImage({ source }) {
  return (
    <View style={styles.logo}>
      <Image source={source} style={styles.logo} />
    </View>
  );
}
