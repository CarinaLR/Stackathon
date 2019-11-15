import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.getmefit}>Get Me Fit!</Text>
      <Text style={styles.welcome}>
        Based on how much weight you would like to lose we can provide you a
        weekly meal plan that will help you to reach your goal!
      </Text>
      <Image
        source={{
          uri:
            'https://assets.vancouverisawesome.com/wp-content/uploads/2017/12/31113259/shutterstock_749969473.jpg',
        }}
        style={{ width: 250, height: 250 }}
      />
      <Button title="Get Started" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  getmefit: {
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
