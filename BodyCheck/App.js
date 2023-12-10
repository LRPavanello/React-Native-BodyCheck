import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Word from './src/components/Word/'
import Form from './src/components/Form/'



export default function App() {
  return (
    <View style={styles.container}>
      <Word />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});

