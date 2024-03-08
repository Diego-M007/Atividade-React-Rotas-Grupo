import React from "react";
import { TextInput, View, Image } from "react-native";
import { styles } from "../styles/styles";

export default function InputEmail() {

    const ImgInputs_Email = {
        uri: "https://imgs.search.brave.com/Q4bL_yMEAbXiFCo2MCwZ4wHEa5PwxrArKnfgEBhrCTU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n"
      };

  return (
    <View style={styles.view_input}>
      <Image source={ImgInputs_Email} style={styles.ImgInputs} />
      <TextInput
        placeholder="Digite seu email" 
        secureTextEntry={false}
        style={styles.input}
      />
    </View>
  );
}
