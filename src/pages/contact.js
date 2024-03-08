import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import HeaderRotas from '../components/Headerotas';
import LoginImageBackground from '../components/LoginImageBackground';


export default function Contact() {

    const navigation = useNavigation();

    const imgB = {
        uri: "https://imgs.search.brave.com/tuMrplV_qcBNlI9SGv52jWf1yqdUoveXzLnxtrHjeGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/YnN0cmFjdC1kaWdp/dGFsLWdyaWQtYmxh/Y2stYmFja2dyb3Vu/ZF81Mzg3Ni05NzY0/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
      };

    return (
    
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LoginImageBackground source={imgB} style={styles.imageBackground}>
            <HeaderRotas />
            <TextInput
                placeholder='Digite seu nome'
                inputMode="text"
                style={styleC.input}
            />
            <TextInput
                placeholder='Digite seu email'
                inputMode="text"
                style={styleC.input}
            />
            <TextInput
                placeholder='Digite uma sua mensagem'
                inputMode="text"
                style={styleC.input}
            />
            <Button
                title="Enviar mensagem"
                onPress={() => {
                    alert("Mensagem enviada");
                }}
                color="gray"
            />
            </LoginImageBackground>
        </View>
    );
}

const styleC = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: '50%',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        paddingLeft: 5,
        fontSize: 15
    }

})