import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, FlatList, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function HomeScreen({ navigation }) {
  const [weightLossGoals, setWeightLossGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setWeightLossGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = goalId => {
    setWeightLossGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.getmefit}>Get Me Fit!</Text>
      <Text style={styles.welcome}>
        Based on how much weight you would like to lose we can provide you a
        weekly meal plan that will help you to reach your goal!
      </Text>
      <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={weightLossGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
      <Image
        source={{
          uri:
            'https://assets.vancouverisawesome.com/wp-content/uploads/2017/12/31113259/shutterstock_749969473.jpg',
        }}
        style={{
          width: 350,
          height: 450,
          marginBottom: 10,
          flex: 2,
        }}
      />
      <Button
        title="Continue"
        style={styles.continue}
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 1,
  },
  getmefit: {
    flex: 1,
    padding: 10,
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 10,
  },
  welcome: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  screen: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#696969',
  },
  continue: {
    color: '#B0C4DE',
    height: 15,
    borderRadius: 12,
    alignItems: 'flex-end',
    paddingBottom: 5,
    flex: 1,
  },
});
