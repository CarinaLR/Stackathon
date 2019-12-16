import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, FlatList, Text } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export default function HomeScreen() {
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
          height: 650,
          marginBottom: 30,
          flex: 2,
        }}
      />
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
  welcome: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  screen: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#A9A9A9',
  },
});
