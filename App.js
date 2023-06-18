import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [login, SetLogin] = useState('');
  const [pass, SetPass] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Strona Główna</Text>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Angielski</Text>
        <Text style={styles.postText}>Anna Królikowska-Gryniuk </Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Aplikacje mobilne</Text>
        <Text style={styles.postText}>Janusz Rybarski</Text>
        <Text style={styles.postText}>Mateusz Sowiński</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Aplikacje Webowe</Text>
        <Text style={styles.postText}>Ryszard Brzegowy</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Inżynieria oprogramowania</Text>
        <Text style={styles.postText}>Krzysztof Gajda</Text>
        <Text style={styles.postText}>Wit Urban</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Proseminarium</Text>
        <Text style={styles.postText}>Dariusz Put</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>Praktyki Zawodowe</Text>
        <Text style={styles.postText}>Natalia Pacholczak</Text>
        <Text style={styles.postText}>Krzysztof Tokarz</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.postTitle}>P1</Text>
        <Text style={styles.postText}>Janusz Rybarski</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  h1: {
    fontSize: 20,
    paddingTop: 40,
    padding: 10,
    textAlign: 'center',
    backgroundColor: "#990033",
    color: '#fff',
    borderBottomWidth: 2
  },

  post: {
    margin: 10,
    backgroundColor: '#ccc',
    borderWidth: 2
  },

  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#990033',
    padding: 10,
    color: '#ddd'
  },

  postText: {
    fontSize: 14,
    padding: 10
  }
});
