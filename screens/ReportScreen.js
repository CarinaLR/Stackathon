import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.getmefit}>Get Me Fit!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  getmefit: {
    padding: 30,
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 10,
  },
});
