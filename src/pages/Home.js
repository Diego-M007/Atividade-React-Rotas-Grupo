import React from 'react-native';
import { View, ImageBackground, Button, Text } from 'react-native';
import { styles } from '../styles/styles';
import HeaderRotas from '../components/Headerotas';

export default function Home() {

  const imgB = {
    uri: "https://imgs.search.brave.com/tuMrplV_qcBNlI9SGv52jWf1yqdUoveXzLnxtrHjeGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/YnN0cmFjdC1kaWdp/dGFsLWdyaWQtYmxh/Y2stYmFja2dyb3Vu/ZF81Mzg3Ni05NzY0/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
  };

  return (
    <ImageBackground source={imgB} style={styles.imageBackground}>
      <HeaderRotas />
      <Text style={styles.text}>
        Bem vindos ao nosso site, esta é nossa Home, selecione para qual página deseja ir clicando em algum dos botões
      </Text>
    </ImageBackground>
  );
}
