import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [login, SetLogin] = useState('');
  const [pass, SetPass] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logowanie}>
      <Text style={styles.h1}>Logowanie:</Text>
      <TextInput 
        style={styles.input}
        placeholder='Login'
        onChangeText={(value)=>SetLogin(value)}
      />
      <TextInput 
        style={styles.input}
        placeholder='Hasło'
        onChangeText={(value)=>SetPass(value)}
        secureTextEntry={true}
      />
      <Button
        title='Zaloguj'
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },

  input: {
    width: 250,
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#eee'
  },

  logowanie: {
    backgroundColor: '#ccc',
    padding: 20,
    borderColor: '#aaa',
    borderWidth: 2,
    borderRadius: 20
  }
});
