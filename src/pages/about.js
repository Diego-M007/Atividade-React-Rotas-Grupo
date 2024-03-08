import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import HeaderRotas from '../components/Headerotas';
import LoginImageBackground from '../components/LoginImageBackground';


const About = () => {

  const navigation = useNavigation();

  const imgB = {
    uri: "https://imgs.search.brave.com/tuMrplV_qcBNlI9SGv52jWf1yqdUoveXzLnxtrHjeGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/YnN0cmFjdC1kaWdp/dGFsLWdyaWQtYmxh/Y2stYmFja2dyb3Vu/ZF81Mzg3Ni05NzY0/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
  };

    const Imagem = {
        uri: "https://recursos.sacramento.com.br/i/logo_sacramento-300x300px.png"
    };
    return (
        <View style={styles.container}>
          <LoginImageBackground source={imgB} style={styles.imageBackground}>
          <HeaderRotas />
            <Image
                source={Imagem}
                style={styles.image}
            />
            <Text style={{color: 'white'}}>
                Aqui está uma imagem arredondada 300 x 300.
            </Text>
         </LoginImageBackground>
        </View>
    );
};

export default About;
