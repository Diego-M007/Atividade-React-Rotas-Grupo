import { Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Home from './src/pages/Home';
import About from './src/pages/about';
import Contact from './src/pages/contact';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='About' component={About} /> 
        <Stack.Screen name='Contact' component={Contact} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}

