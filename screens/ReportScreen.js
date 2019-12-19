import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.getmefit}>Get Me Fit!</Text>
        <Text style={styles.textLabel}>
          Here is your meal plan for this week!
        </Text>
      </View>
      <View style={styles.block}>
        <View style={styles.image}>
          <Image
            source={{
              uri:
                'https://static.onecms.io/wp-content/uploads/sites/44/2019/07/27114300/oatmeal.jpg',
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <View style={styles.image}>
          <Image
            source={{
              uri:
                'https://nutritiouslife.com/wp-content/uploads/2015/07/healthy-snack-ideas.jpg',
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.labels}>
          <Text style={styles.textLabel}>Breakfast</Text>
        </View>
        <View style={styles.labels}>
          <Text style={styles.textLabel}>Snak Options</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.labels}>
          <Text style={styles.textLabel}>Lunch</Text>
        </View>
        <View style={styles.labels}>
          <Text style={styles.textLabel}>Dinner</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.image}>
          <Image
            source={{
              uri:
                'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-6.jpg',
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <View style={styles.image}>
          <Image
            source={{
              uri:
                'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/tilapia-mango.jpg?itok=qSOfthe5',
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-evenly',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  getmefit: {
    padding: 10,
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 5,
  },
  labels: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  block: {
    flexDirection: 'row',
  },
  textLabel: {
    color: 'white',
  },
});
