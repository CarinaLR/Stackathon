import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.getmefit}>Get Me Fit!</Text>
        <Text>Here is your meal plan for this week!</Text>
      </View>
      <View style={styles.images}>
        <Image
          source={{
            uri:
              'https://static.onecms.io/wp-content/uploads/sites/44/2019/07/27114300/oatmeal.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={{
            uri:
              'https://nutritiouslife.com/wp-content/uploads/2015/07/healthy-snack-ideas.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={{
            uri:
              'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-6.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={{
            uri:
              'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/tilapia-mango.jpg?itok=qSOfthe5',
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
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
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    flex: 1,
    justifyContent: 'space-between',
  },
  getmefit: {
    padding: 10,
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 5,
  },
});
