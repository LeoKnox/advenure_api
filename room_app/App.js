import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const myText = "Go build adventures!"
  return (
    <View style={styles.container}>
      <Image
        style={styles.torchImage}
        source={{
          url: "https://opengameart.org/sites/default/files/Torch_Gif.gif",
        }}
      />
      <Text style={styles.baseText}>API Adventure Mobile App</Text>
      <Text style={styles.newText}>{myText}</Text>
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
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText: {
    color: "red",
  },
  torchImage: {
    width:320,
    height: 320,
  },
});
