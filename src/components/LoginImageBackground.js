import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginImageBackground({ source, children }) {
  return (
    <ImageBackground source={source} style={styles.imageBackground}>
      {children}
    </ImageBackground>
  );
}
