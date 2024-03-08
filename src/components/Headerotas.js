import React from 'react-native';
import { View, Button, } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';


export default function HeaderRotas() {

    const navigation = useNavigation();

    return (
    <View style={styles.containeButtons}>
        <View style={styles.rotas}>
            <Button
                title='ir para Home'
                onPress={() => navigation.navigate("Home")}
                color={'gray'}
            />
            <Button
                title='ir para About'
                onPress={() => navigation.navigate("About")}
                color={'blue'}
            />
            <Button
                title='ir para Contact'
                onPress={() => navigation.navigate("Contact")}
                color={'red'}
            />
            <Button
                title='ir para login'
                onPress={() => navigation.navigate("Login")}
                color={'purple'}
            />
        </View>
    </View>
    )
}