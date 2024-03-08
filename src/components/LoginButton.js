import React from 'react';
import { Button } from 'react-native';

export default function LoginButton() {
  return (
    <Button
      title="LOGIN"
      onPress={() => {
        alert("botão de login pressionado");
      }}
      color="gray"
    />
  )};
