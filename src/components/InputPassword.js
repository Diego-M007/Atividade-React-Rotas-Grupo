import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para controlar a visibilidade da senha

  const ImgInputs_Password = {
    uri: 'https://imgs.search.brave.com/KsYjHrNOAadHl2YPhHWacFSAyLXoNZfXMwZA5pQhQE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTgxLzE4MTUz/NC5wbmc',
  };

  return (
      <View style={styles.view_input}>
        <Image source={ImgInputs_Password} style={styles.ImgInputs} />
        <TextInput
          placeholder="Senha"
          secureTextEntry={!passwordVisible} // Oculta a senha se passwordVisible for false
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)} // Alterna a visibilidade da senha ao pressionar a imagem
          style={styles.eyeIconContainer}
        >
          <Image
            source={passwordVisible ? require('../assets/images/icons8-invisible-24.png') : require('../assets/images/icons8-invisible-26.png')} // Carrega uma imagem diferente dependendo da visibilidade da senha
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
  );
}
